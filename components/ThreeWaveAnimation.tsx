"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeWaveAnimation() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ─── Renderer ───────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    mount.appendChild(renderer.domElement);

    // ─── Scene ──────────────────────────────────────────────────────
    const scene = new THREE.Scene();

    // ─── Camera ─────────────────────────────────────────────────────
    // Wide FOV + pulled back so strips fill the whole horizontal extent
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      300
    );
    camera.position.set(0, 4, 22);
    camera.lookAt(0, 0, 0);

    // ─── Lighting ────────────────────────────────────────────────────
    // Strong ambient so base color stays bright
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));

    // Primary top-front key — white highlights
    const key = new THREE.DirectionalLight(0xffffff, 4.0);
    key.position.set(5, 12, 10);
    scene.add(key);

    // Secondary left fill — slightly cool
    const fill = new THREE.DirectionalLight(0xd0e8ff, 2.0);
    fill.position.set(-10, 6, 4);
    scene.add(fill);

    // Rim from below — warm bounce
    const rim = new THREE.DirectionalLight(0xffe8a0, 1.5);
    rim.position.set(0, -8, -6);
    scene.add(rim);

    // Back specular pop
    const back = new THREE.DirectionalLight(0xffffff, 1.0);
    back.position.set(0, 0, -12);
    scene.add(back);

    // ─── Strip helpers ───────────────────────────────────────────────
    // Segment counts — high W for wave smoothness, moderate D for barrel curve
    const SEG_W = 160;
    const SEG_H = 2;
    const SEG_D = 12;

    // Strip width is set dynamically based on camera frustum so it fills screen
    // At z=0, camera at z=22, fov=55 → halfH = tan(27.5°)*22 ≈ 11.46
    // halfW = halfH * aspect  →  fullW = 2 * halfW * 1.35 (overshoot to guarantee bleed)
    const getStripWidth = () => {
      const aspect = mount.clientWidth / mount.clientHeight;
      const halfH = Math.tan((55 * 0.5 * Math.PI) / 180) * 22;
      return halfH * aspect * 2 * 1.5; // 1.5× to bleed past edges
    };

    interface StripConfig {
      color: number;
      emissive: number;
      emissiveIntensity: number;
      y: number;
      speed: number;
      frequency: number;
      phase: number;
      amplitude: number;
      thickness: number; // height of the box
      depth: number;     // depth (z) of the box
    }

    const stripConfigs: StripConfig[] = [
      {
        color:    0xff1111, // 🔴 blazing red
        emissive: 0xff0000,
        emissiveIntensity: 0.55,
        y: 2.2,
        speed: 0.52,
        frequency: 0.95,
        phase: 0,
        amplitude: 0.7,
        thickness: 1.3,
        depth: 1.6,
      },
      {
        color:    0xffe000, // 🟡 electric yellow
        emissive: 0xffcc00,
        emissiveIntensity: 0.55,
        y: 0,
        speed: 0.36,
        frequency: 0.72,
        phase: Math.PI * 0.65,
        amplitude: 0.85,
        thickness: 1.3,
        depth: 1.6,
      },
      {
        color:    0xff5500, // 🟠 vivid orange
        emissive: 0xff3300,
        emissiveIntensity: 0.55,
        y: -2.2,
        speed: 0.60,
        frequency: 1.15,
        phase: Math.PI * 1.35,
        amplitude: 0.65,
        thickness: 1.3,
        depth: 1.6,
      },
    ];

    interface StripMesh {
      mesh: THREE.Mesh;
      geometry: THREE.BufferGeometry;
      baseX: Float32Array;   // original X (unchanged)
      baseY: Float32Array;   // original Y after barrel curve baked in
      baseZ: Float32Array;   // original Z (unchanged)
      cfg: StripConfig;
    }

    // Build geometry with a barrel / lens curve baked into vertex Y
    // so each strip looks like a rounded cuboid (convex top & bottom)
    const buildStrip = (cfg: StripConfig, stripWidth: number): StripMesh => {
      const geo = new THREE.BoxGeometry(
        stripWidth, cfg.thickness, cfg.depth,
        SEG_W, SEG_H, SEG_D
      );
      const posAttr = geo.attributes.position as THREE.BufferAttribute;
      const count = posAttr.count;

      // ── Barrel curve ──────────────────────────────────────────────
      // For each vertex we add a parabolic offset along Y that is
      // maximum at the center (z=0) and zero at the z-edges,
      // AND maximum at the center (x=0) and tapers toward x-edges.
      // This makes each box look "inflated" / rounded like a pillow.
      const barrelStrengthZ = 0.28; // how much bulge across depth
      const barrelStrengthX = 0.18; // softer taper along length

      for (let i = 0; i < count; i++) {
        const x  = posAttr.getX(i);
        const y  = posAttr.getY(i);
        const z  = posAttr.getZ(i);

        // Normalise x in [-1, 1] and z in [-1, 1]
        const nx = x / (stripWidth * 0.5);
        const nz = z / (cfg.depth * 0.5);

        // Parabolic barrel: pushes surface outward
        const barrelY = (1 - nz * nz) * barrelStrengthZ
                      + (1 - nx * nx) * barrelStrengthX;

        // Only push outward (positive Y for top face, negative for bottom)
        const sign = y >= 0 ? 1 : -1;
        posAttr.setY(i, y + sign * barrelY);
      }
      geo.computeVertexNormals();

      // Snapshot the barrel-curved Y as our "rest" positions
      const baseX = new Float32Array(count);
      const baseY = new Float32Array(count);
      const baseZ = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        baseX[i] = posAttr.getX(i);
        baseY[i] = posAttr.getY(i);
        baseZ[i] = posAttr.getZ(i);
      }

      const mat = new THREE.MeshPhysicalMaterial({
        color:              cfg.color,
        emissive:           cfg.emissive,
        emissiveIntensity:  cfg.emissiveIntensity,
        metalness:          0.3,
        roughness:          0.08,   // very smooth → strong specular
        reflectivity:       1.0,
        clearcoat:          1.0,    // max clearcoat for that glossy candy finish
        clearcoatRoughness: 0.05,
        envMapIntensity:    1.0,
        side: THREE.FrontSide,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.y = cfg.y;
      scene.add(mesh);

      return { mesh, geometry: geo, baseX, baseY, baseZ, cfg };
    };

    let strips: StripMesh[] = stripConfigs.map((cfg) =>
      buildStrip(cfg, getStripWidth())
    );

    // ─── Animation loop ──────────────────────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      strips.forEach(({ geometry, baseX, baseY, cfg }) => {
        const posAttr = geometry.attributes.position as THREE.BufferAttribute;
        const count = posAttr.count;

        for (let i = 0; i < count; i++) {
          const x = baseX[i];

          // Compound wave — primary + sub-harmonic for organic feel
          const wave =
            Math.sin(x * cfg.frequency + t * cfg.speed + cfg.phase) *
              cfg.amplitude +
            Math.sin(x * cfg.frequency * 0.55 + t * cfg.speed * 0.65 + cfg.phase + 1.3) *
              cfg.amplitude * 0.40 +
            Math.cos(x * cfg.frequency * 0.3 + t * cfg.speed * 1.1 + cfg.phase + 0.8) *
              cfg.amplitude * 0.20;

          posAttr.setY(i, baseY[i] + wave);
        }

        posAttr.needsUpdate = true;
        geometry.computeVertexNormals();
      });

      renderer.render(scene, camera);
    };

    animate();

    // ─── Resize handler ──────────────────────────────────────────────
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      // Rebuild strips at the new width so they always fill the screen
      const newWidth = getStripWidth();
      strips.forEach(({ geometry, mesh, cfg }) => {
        geometry.dispose();
        (mesh.material as THREE.Material).dispose();
        scene.remove(mesh);
        // suppress unused-cfg lint for now — cfg lives on the new strip
        void cfg;
      });
      strips = stripConfigs.map((cfg) => buildStrip(cfg, newWidth));
    };

    window.addEventListener("resize", handleResize);

    // ─── Cleanup ─────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      strips.forEach(({ geometry, mesh }) => {
        geometry.dispose();
        (mesh.material as THREE.Material).dispose();
        scene.remove(mesh);
      });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl md:rounded-3xl"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    />
  );
}

"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { X, Square, Minus } from "lucide-react";
import { useTheme } from "next-themes";

export type TerminalOpenReason = "navbar" | "easter-egg";

type TerminalWindowProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  openReason?: TerminalOpenReason;
  onMount?: (ref: { toggleVisibility: () => void }) => void;
};

type TerminalCommand = {
  name: string;
  description: string;
  run: () => string | { type: "clear" } | { type: "close" };
};

const DEFAULT_WIDTH = 550;
const DEFAULT_HEIGHT = 400;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function TerminalWindow({ isOpen, onRequestClose, openReason = "navbar", onMount }: TerminalWindowProps) {
  const { resolvedTheme } = useTheme();
  // Invert: dark site => light terminal, light site => dark terminal
  // Default to dark terminal (light mode site) to match SSR
  const terminalIsDark = resolvedTheme !== "dark";

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [history, setHistory] = useState<string[]>(() => {
    const base = [
      "Welcome to Dhruvesh's Terminal",
      "Type 'help' to see available commands",
    ];
    if (openReason === "easter-egg") {
      base.push("(Easter egg unlocked: you typed open-terminal)");
    }
    return base;
  });
  const [command, setCommand] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const draggingRef = useRef<{ startX: number; startY: number; startLeft: number; startTop: number } | null>(null);
  const interactionTimeoutRef = useRef<number | null>(null);
  const dragRafRef = useRef<number | null>(null);
  const pendingPositionRef = useRef<{ left: number; top: number } | null>(null);

  // Expose toggleVisibility to parent
  useEffect(() => {
    onMount?.({ toggleVisibility: () => setIsVisible((v) => !v) });
  }, [onMount]);

  const [position, setPosition] = useState<{ left: number; top: number }>(() => {
    if (typeof window === "undefined") return { left: 20, top: 20 };
    const left = Math.max(20, window.innerWidth - DEFAULT_WIDTH - 40);
    const top = Math.max(20, window.innerHeight - DEFAULT_HEIGHT - 80);
    return { left, top };
  });

  const focusInput = () => {
    // On mobile, focusing an actual input is required to open the keyboard.
    inputRef.current?.focus();
  };

  const commands = useMemo<TerminalCommand[]>(
    () => [
      {
        name: "help",
        description: "List available commands",
        run: () =>
          "Commands: help, about, skills, projects, clear, fullscreen, close",
      },
      {
        name: "about",
        description: "About me",
        run: () => "Computer Engineering student | Web Developer",
      },
      {
        name: "skills",
        description: "My skills",
        run: () => "React, Java, Spring Boot, DSA",
      },
      {
        name: "projects",
        description: "My projects",
        run: () => "Chat App, Portfolio, Management Systems",
      },
      {
        name: "clear",
        description: "Clear the terminal",
        run: () => ({ type: "clear" }),
      },
      {
        name: "fullscreen",
        description: "Toggle fullscreen mode",
        run: () => {
          setIsFullscreen((prev) => !prev);
          return isFullscreen ? "Exited fullscreen" : "Fullscreen enabled";
        },
      },
      {
        name: "close",
        description: "Close the terminal window",
        run: () => ({ type: "close" }),
      },
    ],
    [isFullscreen]
  );

  // Reset visibility when terminal opens
  useEffect(() => {
    if (isOpen && !isVisible) {
      const timeout = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, isVisible]);

  // Focus input when opening (best-effort; mobile may require user gesture).
  useEffect(() => {
    if (!isOpen || !isVisible) return;
    const timeout = window.setTimeout(() => {
      focusInput();
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [isOpen, isVisible]);

  // Cursor blink effect
  useEffect(() => {
    if (!isOpen) return;
    
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    
    return () => clearInterval(interval);
  }, [isOpen]);

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (!isOpen) return;
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [isOpen, history, command]);

  const bumpInteraction = () => {
    setIsInteracting(true);
    if (interactionTimeoutRef.current) {
      window.clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = window.setTimeout(() => {
      setIsInteracting(false);
    }, 1200);
  };

  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) {
        window.clearTimeout(interactionTimeoutRef.current);
      }
      if (dragRafRef.current) {
        window.cancelAnimationFrame(dragRafRef.current);
        dragRafRef.current = null;
      }
    };
  }, []);

  // Handle dragging
  useEffect(() => {
    if (!isOpen) return;

    function onPointerMove(e: PointerEvent) {
      if (!draggingRef.current) return;
      if (isFullscreen) return;
      const dx = e.clientX - draggingRef.current.startX;
      const dy = e.clientY - draggingRef.current.startY;
      const width = DEFAULT_WIDTH;
      const height = DEFAULT_HEIGHT;
      const maxLeft = window.innerWidth - width - 10;
      const maxTop = window.innerHeight - height - 10;

      const newLeft = clamp(draggingRef.current.startLeft + dx, 10, maxLeft);
      const newTop = clamp(draggingRef.current.startTop + dy, 10, maxTop);

      // Update transform immediately for maximum smoothness on mobile
      if (containerRef.current && !isFullscreen) {
        containerRef.current.style.transform = `translate3d(${newLeft}px, ${newTop}px, 0)`;
      }

      pendingPositionRef.current = { left: newLeft, top: newTop };
    }

    function onPointerUp() {
      draggingRef.current = null;
      if (pendingPositionRef.current) {
        const finalPos = pendingPositionRef.current;
        setPosition(finalPos);
      }
      pendingPositionRef.current = null;
      setIsDragging(false);
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [isOpen, isFullscreen]);

  const runCommand = useMemo(() => {
    return () => {
      bumpInteraction();
      const trimmed = command.trim();

      if (!trimmed) {
        setHistory((prev) => [...prev, `> ${command}`]);
        setCommand("");
        return;
      }

      const cmd = trimmed.toLowerCase();
      const found = commands.find((c) => c.name === cmd);
      const result = found ? found.run() : "Command not found";

      setHistory((prev) => [...prev, `> ${trimmed}`]);

      if (typeof result === "string") {
        setHistory((prev) => [...prev, result]);
      } else if (result.type === "clear") {
        setHistory([]);
      } else if (result.type === "close") {
        onRequestClose();
        setCommand("");
        return;
      }

      setCommand("");
    };
  }, [command, commands, onRequestClose]);

  const terminalBodyClass = useMemo(() => {
    const base =
      "flex-1 p-3 text-sm overflow-y-auto leading-5 cursor-text overscroll-contain focus:outline-none";

    const scrollbarHidden =
      "[scrollbar-width:none] [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0";

    const scrollbarShown = terminalIsDark
      ? "[scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.35)_transparent] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/50 [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-transparent"
      : "[scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.45)_transparent] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-black/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-black/50 [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-transparent";

    return `${base} ${isInteracting ? scrollbarShown : scrollbarHidden}`;
  }, [isInteracting, terminalIsDark]);

  const containerThemeClass = terminalIsDark
    ? "border-white/10 bg-black/75 text-white"
    : "border-black/10 bg-white/75 text-black";

  const headerThemeClass = terminalIsDark
    ? "bg-zinc-900/85 border-white/10"
    : "bg-zinc-100/85 border-black/10";

  const controlHoverClass = terminalIsDark
    ? "hover:bg-white hover:text-black"
    : "hover:bg-black hover:text-white";

  const buttonBaseClass = terminalIsDark ? "text-black" : "text-white";

  return (
    <div
      role="dialog"
      aria-label="Terminal window"
      ref={containerRef}
      suppressHydrationWarning
      className={`fixed shadow-2xl flex flex-col overflow-hidden border backdrop-blur-md will-change-transform transition-[opacity,border-radius] duration-300 ease-out ${isDragging ? "transition-none" : ""} ${containerThemeClass}`}
      style={{
        touchAction: 'none',
        ...(isFullscreen
          ? { left: 0, top: 0, width: '100vw', height: '100vh', transform: 'translateZ(0)', zIndex: 9999 }
          : {
              left: 0,
              top: 0,
              width: DEFAULT_WIDTH,
              height: DEFAULT_HEIGHT,
              transform: `translate3d(${position.left}px, ${position.top}px, 0)`,
              zIndex: 9999,
              willChange: isDragging ? 'transform' : 'auto',
            }),
        opacity: isVisible && isOpen ? 1 : 0,
        pointerEvents: isVisible && isOpen ? 'auto' : 'none',
        borderRadius: isFullscreen ? 0 : 12,
      }}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between backdrop-blur-md px-3 py-2 select-none cursor-move touch-none border-b ${headerThemeClass}`}
        onPointerDown={(e) => {
          if (isFullscreen) return;
          (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
          setIsDragging(true);
          draggingRef.current = {
            startX: e.clientX,
            startY: e.clientY,
            startLeft: position.left,
            startTop: position.top,
          };
        }}
        onDoubleClick={() => setIsFullscreen((v) => !v)}
      >
        <span className="text-sm font-medium">Terminal</span>
        <div className="flex gap-2">
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => setIsFullscreen((v) => !v)}
            aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            suppressHydrationWarning
            className={`p-1 rounded-full transition-colors ${buttonBaseClass} hover:bg-green-500! hover:text-white!`}
          >
            <Square size={12} />
          </button>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => setIsVisible(false)}
            aria-label="Minimize"
            suppressHydrationWarning
            className={`p-1 rounded-full transition-colors ${buttonBaseClass} ${controlHoverClass}`}
          >
            <Minus size={12} />
          </button>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => {
              setHistory([
                "Welcome to Dhruvesh's Terminal",
                "Type 'help' to see available commands",
              ]);
              setCommand("");
              onRequestClose();
            }}
            aria-label="Close"
            suppressHydrationWarning
            className={`p-1 rounded-full transition-colors ${buttonBaseClass} hover:bg-red-500! hover:text-white!`}
          >
            <X size={12} />
          </button>
        </div>
      </div>

      <div 
          ref={bodyRef} 
          className={terminalBodyClass}
          onClick={() => {
            bumpInteraction();
            focusInput();
          }}
          onFocus={() => setIsInteracting(true)}
          onBlur={() => setIsInteracting(false)}
          onWheel={() => bumpInteraction()}
          tabIndex={0}
        >
          <input
            ref={inputRef}
            value={command}
            onChange={(e) => {
              bumpInteraction();
              setCommand(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                runCommand();
                // Keep the mobile keyboard open after running.
                window.setTimeout(() => focusInput(), 0);
              }
            }}
            inputMode="text"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            dir="ltr"
            aria-label="Terminal input"
            className="absolute left-0 top-0 h-px w-px opacity-0 pointer-events-none"
          />
          {history.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
          <div className="flex items-start">
            <span className="text-emerald-500 mr-2">&gt;</span>
            <span className="flex-1 flex items-center">
              <span className="text-[#499bf9]">{command}</span>
              <span 
                className={`inline-block w-2 h-4 ml-0.5 bg-[#00499c] ${
                  cursorVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transition: 'opacity 0.1s' }}
              />
            </span>
          </div>
        </div>
    </div>
  );
}

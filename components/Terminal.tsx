"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { X, Square, Minus } from "lucide-react";

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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
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

  const bodyRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef<{ startX: number; startY: number; startLeft: number; startTop: number } | null>(null);
  const interactionTimeoutRef = useRef<number | null>(null);

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
      setPosition({
        left: clamp(draggingRef.current.startLeft + dx, 10, maxLeft),
        top: clamp(draggingRef.current.startTop + dy, 10, maxTop),
      });
    }

    function onPointerUp() {
      draggingRef.current = null;
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [isOpen, isFullscreen]);

  // Handle keyboard input (real terminal feel)
  useEffect(() => {
    if (!isOpen || !isVisible) return;

    function handleKeyDown(e: KeyboardEvent) {
      // Ignore if typing in other inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === "Enter") {
        e.preventDefault();
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
      } else if (e.key === "Backspace") {
        e.preventDefault();
        bumpInteraction();
        setCommand((prev) => prev.slice(0, -1));
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        bumpInteraction();
        setCommand((prev) => prev + e.key);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isVisible, command, commands, onRequestClose]);

  const terminalBodyClass = useMemo(() => {
    const base =
      "flex-1 p-3 text-sm overflow-y-auto font-mono leading-5 cursor-text overscroll-contain focus:outline-none";

    const scrollbarHidden =
      "[scrollbar-width:none] [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0";

    const scrollbarShown =
      "[scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.45)_transparent] dark:[scrollbar-color:rgba(255,255,255,0.35)_transparent] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-black/5 dark:[&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/30 dark:[&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-black/50 dark:hover:[&::-webkit-scrollbar-thumb]:bg-white/50 [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-transparent";

    return `${base} ${isInteracting ? scrollbarShown : scrollbarHidden}`;
  }, [isInteracting]);

  return (
    <div
      role="dialog"
      aria-label="Terminal window"
      className={`fixed shadow-2xl flex flex-col overflow-hidden border border-black/10 dark:border-white/10 bg-white/75 dark:bg-black/75 backdrop-blur-md text-black dark:text-white transition-all duration-300 ease-out`}
      style={{
        ...(isFullscreen
          ? { left: 0, top: 0, width: '100vw', height: '100vh', zIndex: 9999 }
          : {
              left: position.left,
              top: position.top,
              width: DEFAULT_WIDTH,
              height: DEFAULT_HEIGHT,
              zIndex: 9999,
            }),
        opacity: isVisible && isOpen ? 1 : 0,
        pointerEvents: isVisible && isOpen ? 'auto' : 'none',
        borderRadius: isFullscreen ? 0 : 12,
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between bg-zinc-100/85 dark:bg-zinc-900/85 backdrop-blur-md px-3 py-2 select-none cursor-move border-b border-black/10 dark:border-white/10"
        onPointerDown={(e) => {
          if (isFullscreen) return;
          (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
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
            className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <Square size={14} />
          </button>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => setIsVisible(false)}
            aria-label="Minimize"
            className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <Minus size={14} />
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
            className="p-1 rounded hover:bg-red-500/15 transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      <div 
          ref={bodyRef} 
          className={terminalBodyClass}
          onClick={() => {
            bumpInteraction();
            bodyRef.current?.focus();
          }}
          onFocus={() => setIsInteracting(true)}
          onBlur={() => setIsInteracting(false)}
          onWheel={() => bumpInteraction()}
          tabIndex={0}
        >
          {history.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
          <div className="flex items-start">
            <span className="text-emerald-500 mr-2">&gt;</span>
            <span className="flex-1 flex items-center">
              <span className="text-[#00e5ff]">{command}</span>
              <span 
                className={`inline-block w-2 h-4 ml-0.5 bg-[#00e5ff] ${
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

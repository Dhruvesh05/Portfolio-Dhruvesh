'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import TerminalWindow, { type TerminalOpenReason } from './Terminal';

type TerminalContextValue = {
  isOpen: boolean;
  openTerminal: (reason?: TerminalOpenReason) => void;
  closeTerminal: () => void;
  toggleTerminal: () => void;
  toggleVisibility: () => void;
};

const TerminalContext = createContext<TerminalContextValue | null>(null);

const EASTER_EGG = 'open-terminal';

function isTypingInEditableElement(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  const tag = target.tagName.toLowerCase();
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return true;
  if ((target as HTMLElement).isContentEditable) return true;
  return false;
}

export function TerminalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openReason, setOpenReason] = useState<TerminalOpenReason>('navbar');
  const terminalRefRef = useRef<{ toggleVisibility: () => void } | null>(null);

  const bufferRef = useRef('');

  const openTerminal = useCallback((reason: TerminalOpenReason = 'navbar') => {
    setOpenReason(reason);
    setIsOpen(true);
  }, []);

  const closeTerminal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleTerminal = useCallback(() => {
    setIsOpen((v) => !v);
    setOpenReason('navbar');
  }, []);

  const toggleVisibility = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      terminalRefRef.current?.toggleVisibility();
    }
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (isTypingInEditableElement(e.target)) return;

      // Only collect real characters
      if (e.key.length !== 1) return;

      bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-EASTER_EGG.length);
      if (bufferRef.current === EASTER_EGG) {
        openTerminal('easter-egg');
        bufferRef.current = '';
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openTerminal]);

  const value = useMemo<TerminalContextValue>(
    () => ({ isOpen, openTerminal, closeTerminal, toggleTerminal, toggleVisibility }),
    [isOpen, openTerminal, closeTerminal, toggleTerminal, toggleVisibility]
  );

  return (
    <TerminalContext.Provider value={value}>
      {children}
      <TerminalWindow 
        isOpen={isOpen} 
        onRequestClose={closeTerminal} 
        openReason={openReason}
        onMount={(ref) => { terminalRefRef.current = ref; }}
      />
    </TerminalContext.Provider>
  );
}

export function useTerminal() {
  const ctx = useContext(TerminalContext);
  if (!ctx) throw new Error('useTerminal must be used within TerminalProvider');
  return ctx;
}

"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

// Context for managing active section
interface NavSectionContextType {
  activeSection: string | null;
  setActiveSection: (sectionId: string | null) => void;
}

const NavSectionContext = createContext<NavSectionContextType | null>(null);

// Hook to use the nav section context
export const useNavSection = () => {
  const context = useContext(NavSectionContext);
  if (!context) {
    throw new Error("useNavSection must be used within a NavSectionProvider");
  }
  return context;
};

// Provider component to wrap your app or sections
interface NavSectionProviderProps {
  children: React.ReactNode;
}

export const NavSectionProvider: React.FC<NavSectionProviderProps> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = React.useState<string | null>("main");

  return (
    <NavSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavSectionContext.Provider>
  );
};

// Main NavSection component
interface NavSectionProps {
  children: React.ReactNode;
  sectionId: string;
  className?: string;
  threshold?: number; // How much of the element should be visible to trigger (0-1)
  margin?: string; // Root margin for intersection observer
  onActiveChange?: (isActive: boolean) => void; // Optional callback for when section becomes active/inactive
}

export const NavSection: React.FC<NavSectionProps> = ({
  children,
  sectionId,
  className,
  threshold = 0.3,
  onActiveChange,
}) => {
  const ref = useRef<HTMLElement>(null);
  const { activeSection, setActiveSection } = useNavSection();
  

  const isInView = useInView(ref, {
    amount: threshold, // 'amount' is the correct property name for Framer Motion
    margin: "0px 0px 0px 0px",
  });

  useEffect(() => {
    if (isInView) {
      setActiveSection(sectionId);
      onActiveChange?.(true);
    }
  }, [isInView, sectionId, setActiveSection, onActiveChange, activeSection]);

  return (
    <section
      ref={ref}
      id={sectionId}
      className={cn("w-full", className)}
    >
      {children}
    </section>
  );
};

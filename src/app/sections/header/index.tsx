"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { useTranslations } from "next-intl";
import LangButton from "@/components/lang-button";

export function Header() {
  const t = useTranslations("header");
  const navItems = [
    {
      name: t("main"),
      id: "main",
    },
    {
      name: t("services"),
      id: "services",
    },
    {
      name: t("team"),
      id: "team",
    },
    {
      name: t("contact"),
      id: "contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <Image width={50} height={50} src={logo} alt="logo" />

        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <LangButton />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
        <Image width={50} height={50} src={logo} alt="logo" />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.id}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <LangButton />
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

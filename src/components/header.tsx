"use client";
import { FeaturesSectionDemo } from "./features";
import Started from "./Started";
import { HeroSectionOne } from "./ui/herosection";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState } from "react";
const formUrl = import.meta.env.VITE_FORM_URL;

export function NavbarDemo() {
  
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },

    {
      name: "Contact",
      link: "#contact",
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" onClick={()=>window.location.href = `${formUrl}`}>Start Hiring</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
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
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 "
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  window.location.href = `${formUrl}`
                }}
                variant="primary"
                className="w-full"
              >
                Start Hiring
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>

      </Navbar>
     
      <HeroSectionOne />
      <FeaturesSectionDemo />
      <Started />
      {/* Navbar */}
    </div>
  );
}


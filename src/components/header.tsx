"use client";

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


export function NavbarDemo() {

  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Contact",
      link: "https://calendly.com/dhruvmehta382/30min",
    },
    {
      name: "Why Unbiass",
      link: "/why",
    },
    {
      name: "About Us",
      link: "/about",
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo  />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" onClick={() => window.location.href = 'https://calendly.com/dhruvmehta382/30min' }>Start Hiring</NavbarButton>
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
                  window.location.href = 'https://calendly.com/dhruvmehta382/30min'
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
    </div>
  );
}


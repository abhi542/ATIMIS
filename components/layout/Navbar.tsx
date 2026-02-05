"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="z-50" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo_nobg.png"
            alt="ATIMIS"
            width={500}
            height={500}
            className="h-32 w-auto object-contain mt-2"
          />
        </Link>

        {/* Center Spacer */}
        <div className="flex-1" />

        {/* Desktop Nav + CTA */}
        <div className="flex items-center gap-8">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/work" className="hover:text-white transition-colors">
              Our Work
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              How We Engineer
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button variant="default" className="bg-white text-black hover:bg-zinc-200 font-medium cursor-pointer">
                Get Started
              </Button>
            </Link>

            {/* Mobile Get Started (Small version if needed, or keep hidden and put in menu) - User had it visible in screenshot, but might duplicate if in menu too. I'll keep it visible as per screenshot but maybe hide on menu open? actually the menu will cover it. */}
            <Link href="/contact" className="md:hidden">
              <Button variant="default" size="sm" className="bg-white text-black hover:bg-zinc-200 font-medium h-9 px-4 text-xs cursor-pointer">
                Get Started
              </Button>
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              className="md:hidden text-zinc-400 hover:text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden animate-in slide-in-from-top-5 duration-200">
          <Link
            href="/services"
            className="text-lg font-medium text-zinc-400 hover:text-white transition-colors p-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/work"
            className="text-lg font-medium text-zinc-400 hover:text-white transition-colors p-2"
            onClick={() => setIsOpen(false)}
          >
            Our Work
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium text-zinc-400 hover:text-white transition-colors p-2"
            onClick={() => setIsOpen(false)}
          >
            How We Engineer
          </Link>

        </div>
      )}
    </nav>
  );
}

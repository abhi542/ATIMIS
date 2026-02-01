import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          ATIMIS
        </Link>

        {/* Desktop Nav */}
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

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button variant="default" className="bg-white text-black hover:bg-zinc-200 font-medium">
              Get Started
            </Button>
          </Link>

          {/* Mobile Menu Trigger (Placeholder for now) */}
          <button className="md:hidden text-zinc-400 hover:text-white">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}

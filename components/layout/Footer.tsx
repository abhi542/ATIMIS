import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black text-zinc-500 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">

                {/* Brand Column */}
                <div className="space-y-6 pl-4">
                    <div>
                        <Image
                            src="/logo_nobg.png"
                            alt="ATIMIS"
                            width={750}
                            height={750}
                            className="h-48 w-auto -mb-16 opacity-80 object-contain"
                        />
                        <p className="text-sm text-zinc-500">Production-grade engineering.</p>
                    </div>
                </div>

                {/* Copyright Column (Center) */}
                <div className="flex-1 flex flex-col md:items-center justify-end pb-1">
                    <p className="text-zinc-500 font-mono text-xs">© 2026 ATIMIS.</p>
                </div>

                {/* Links Columns Container */}
                <div className="flex gap-12 md:gap-24 text-left">

                    {/* Explore Column */}
                    <div>
                        <h4 className="text-white font-medium mb-6 text-sm">Explore</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                            <li><Link href="/work" className="hover:text-white transition-colors">Our Work</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">How We Engineer</Link></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-white font-medium mb-6 text-sm">Legal</h4>
                        <ul className="space-y-3 text-sm">

                            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link></li>
                        </ul>
                    </div>
                </div>

            </div>

        </footer>
    );
}

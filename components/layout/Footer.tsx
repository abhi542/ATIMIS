import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black text-zinc-500 py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">

                {/* Brand Column */}
                <div className="md:col-span-4 space-y-6">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-1">ATIMIS</h3>
                        <p className="text-sm text-zinc-500">Production-grade engineering.</p>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div className="md:col-span-2">
                    <h4 className="text-white font-medium mb-6 text-sm">Explore</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                        <li><Link href="/work" className="hover:text-white transition-colors">Our Work</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">How We Engineer</Link></li>
                    </ul>
                </div>

                {/* Links Column 2 */}
                <div className="md:col-span-2">
                    <h4 className="text-white font-medium mb-6 text-sm">Legal</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-white transition-colors">MSA Terms</Link></li>
                        <li><Link href="/" className="hover:text-white transition-colors">Privacy</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="md:col-span-4">
                    <h4 className="text-white font-medium mb-6 text-sm">Reach Out</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="mailto:contact@atimis.in" className="hover:text-white transition-colors">contact@atimis.in</a></li>
                        <li className="text-zinc-600">Remote / Global</li>
                    </ul>
                </div>

            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-mono">
                <p>© 2026 ATIMIS.</p>
            </div>
        </footer>
    );
}

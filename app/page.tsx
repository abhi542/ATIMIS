import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-white selection:text-black">

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 border-b border-white/10 overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Accepting New Engineering Partners for Q3
          </div>

          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-white mb-2 leading-none select-none">
            ATIMIS
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-zinc-100">
            Building the Extraordinary.
          </h2>

          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-relaxed mb-12">
            Engineering AI systems, internal tools, and platforms designed to operate reliably in real-world production environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="text-base px-8 py-7 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" size="lg" className="text-base px-8 py-7 rounded-full border-zinc-800 text-white hover:bg-zinc-900 w-full sm:w-auto">
                Our Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Social Proof (Subtle) */}
      <section className="py-12 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm text-zinc-600 mb-6 font-mono uppercase tracking-widest">Trusted by efficient teams at</p>
          <div className="flex flex-wrap gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos - replacing text with distinct fonts to simulate logos */}
            <span className="text-xl font-bold text-zinc-400">ACME Corp</span>
            <span className="text-xl font-serif text-zinc-400 italic">GlobalStatus</span>
            <span className="text-xl font-mono text-zinc-400">NEXUS AI</span>
            <span className="text-xl font-bold text-zinc-400 tracking-tighter">Stratos</span>
          </div>
        </div>
      </section>

      {/* Principles / "How We Work" */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">

            <div className="space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-white/20 transition-colors">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Scope for Outcomes</h3>
              <p className="text-zinc-400 leading-relaxed">
                We don&apos;t clear tickets. We prevent entire classes of business problems. If a feature doesn&apos;t move the needle, we cut it.
              </p>
            </div>

            <div className="space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-white/20 transition-colors">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Design for Failure</h3>
              <p className="text-zinc-400 leading-relaxed">
                Happy paths are easy. We engineer for network timeouts, bad data, and API rate limits. Your system stays up when the world breaks.
              </p>
            </div>

            <div className="space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-white/20 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Shipped Milestones</h3>
              <p className="text-zinc-400 leading-relaxed">
                No black boxes. You see valid, testable software every sprint. We deploy to production early and often.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

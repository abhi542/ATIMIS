import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import LightPillar from "@/components/ui/LightPillar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-white selection:text-black">

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 border-b border-white/10 overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">

          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-white mb-2 leading-none select-none">
            ATIMIS
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-zinc-100">
            Building the Extraordinary.
          </h2>

          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-relaxed mb-12">
            Engineering AI systems, internal tools, and platforms designed to operate reliably in real-world production environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-base px-8 py-7 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold w-full sm:w-auto cursor-pointer">
                Get Started
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" size="lg" className="text-base px-8 py-7 rounded-full border-zinc-800 text-white hover:bg-zinc-900 w-full sm:w-auto cursor-pointer">
                Our Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Background Grid */}
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-[1]"></div>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={1.3}
            rotationSpeed={0.3}
            glowAmount={0.002}
            pillarWidth={2}
            pillarHeight={0.2}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        </div>
      </section>

      {/* Social Proof (Subtle) */}
      <section className="py-12 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm text-zinc-600 mb-6 font-mono uppercase tracking-widest">Trusted by efficient teams at</p>
          <div className="flex flex-wrap gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos - replacing text with distinct fonts to simulate logos */}
            <span className="text-xl font-bold text-zinc-400">NEXUS AI</span>
            <span className="text-xl font-serif text-zinc-400 italic">The Chess Square</span>
            <span className="text-xl font-mono text-zinc-400">FitIQ </span>
            <span className="text-xl font-bold text-zinc-400 tracking-tighter">Stratos</span>
          </div>
        </div>
      </section>

      {/* Principles / "How We Work" */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">

            <div className="space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                <Zap className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white">Scope for Outcomes</h3>
              <p className="text-zinc-400 leading-relaxed">
                We don&apos;t clear tickets. We prevent entire classes of business problems. If a feature doesn&apos;t move the needle, we cut it.
              </p>
            </div>

            <div className="space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                <ShieldCheck className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white">Design for Failure</h3>
              <p className="text-zinc-400 leading-relaxed">
                Happy paths are easy. We engineer for network timeouts, bad data, and API rate limits. Your system stays up when the world breaks.
              </p>
            </div>

            <div className="space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
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

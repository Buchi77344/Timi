import BlueprintScene from "./BlueprintScene";
import Reveal from "./Reveal";
import { RESUME_URL } from "./config";

export default function Hero() {
  return (
    <section id="top" className="blueprint-grid relative overflow-hidden text-paper">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          {/* Copy */}
          <div>
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2 rounded-sm border border-blueprint-light/40 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-blueprint-light">
                <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                Full-stack software · AI automation · Real estate
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-paper md:text-6xl">
                I ship full-stack software
                <br />
                &amp; AI automation that works.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/70 md:text-lg">
                Websites that sell, AI lead responses in minutes instead of
                days, and CRMs that replace five disconnected tools — built
                end to end across real estate, AI, and full-stack builds.
                One developer, no account managers, no handoffs.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 inline-flex items-center gap-2 rounded-sm border border-paper/15 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-paper/70">
                <span className="h-1.5 w-1.5 rounded-full bg-patina" />
                Open to freelance builds &amp; full-time opportunities
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-sm bg-brass px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
                >
                  Start a project
                </a>
                <a
                  href="#work"
                  className="rounded-sm border border-paper/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-paper hover:bg-paper/5"
                >
                  See what I build
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm border border-paper/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-paper hover:bg-paper/5"
                >
                  Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-blueprint-light/20 pt-6 font-mono">
                <div>
                  <dt className="text-2xl font-semibold text-paper md:text-3xl">5+</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-widest text-paper/50">
                    Years shipping software &amp; AI
                  </dd>
                </div>
                <div>
                  <dt className="text-2xl font-semibold text-paper md:text-3xl">4,300+</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-widest text-paper/50">
                    Live listings synced in production
                  </dd>
                </div>
                <div>
                  <dt className="text-2xl font-semibold text-paper md:text-3xl">1</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-widest text-paper/50">
                    Developer — you talk directly to me
                  </dd>
                </div>
              </dl>

              <p className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-paper/50">
                <span className="h-1.5 w-1.5 rounded-full bg-patina" />
                4.9-rated · Fiverr Level 1 seller
              </p>
            </Reveal>
          </div>

          {/* Interactive 3D signature element */}
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0">
              <BlueprintScene />
            </div>

            {/* title block */}
            <div className="pointer-events-none absolute bottom-0 right-0 w-[78%] border border-blueprint-light/40 bg-ink/80 p-4 font-mono text-[10px] uppercase tracking-widest text-paper/70 backdrop-blur-sm">
              <div className="flex justify-between border-b border-blueprint-light/20 pb-2">
                <span>Drawn by</span>
                <span className="text-paper">Timi Festus</span>
              </div>
              <div className="flex justify-between border-b border-blueprint-light/20 py-2">
                <span>Discipline</span>
                <span className="text-paper">Full-stack + AI</span>
              </div>
              <div className="flex justify-between pt-2">
                <span>Base</span>
                <span className="text-paper">Lagos, NG · Remote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import {
  EMAIL,
  EMAIL_HREF,
  GITHUB_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "./config";
import { GitHubIcon, WhatsAppIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="blueprint-grid relative overflow-hidden text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-blueprint-light">
              Start a project
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Tell me what you
              <br />
              want to build.
            </h2>
            <p className="mt-5 max-w-md text-paper/65">
              Website, web app, online store, booking system, or AI
              automation — or all of it wired together. Message me with what
              you&apos;re trying to build and I&apos;ll tell you honestly
              what it takes.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={EMAIL_HREF}
                className="rounded-sm bg-brass px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
              >
                {EMAIL}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-paper/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-paper hover:bg-paper/5"
              >
                <WhatsAppIcon className="mr-1.5 h-3.5 w-3.5" />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <a
                href="https://www.fiverr.com/onyebuchifestus"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-paper/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-paper hover:bg-paper/5"
              >
                View Fiverr profile
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-sm border border-paper/30 p-3 text-paper transition-colors hover:border-paper hover:bg-paper/5"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-paper/50">
              <span className="h-1.5 w-1.5 rounded-full bg-patina" />
              4.9-rated · Fiverr Level 1 seller
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <TiltCard className="border border-blueprint-light/40 bg-ink/60 p-5 font-mono text-[11px] uppercase tracking-widest text-paper/70 backdrop-blur-sm">
              <div className="flex justify-between border-b border-blueprint-light/20 pb-3">
                <span>Status</span>
                <span className="flex items-center gap-2 text-paper">
                  <span className="h-1.5 w-1.5 rounded-full bg-patina" />
                  Open for projects
                </span>
              </div>
              <div className="flex justify-between border-b border-blueprint-light/20 py-3">
                <span>Response time</span>
                <span className="text-paper">Within 24h</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Based</span>
                <span className="text-paper">Lagos, NG · Remote</span>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-blueprint-light/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 font-mono text-[11px] uppercase tracking-widest text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Timi Festus</span>
          <span>Full-stack developer · Websites &amp; web apps · AI automation</span>
        </div>
      </div>
    </section>
  );
}
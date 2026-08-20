import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { NYREDEALS_URL, REVACORE_LIVE_URL } from "./config";

type Project = {
  tag: string;
  title: string;
  stack: string[];
  description: string;
  highlights: string[];
  liveUrl?: string;
  codeUrl?: string;
};

// RevaCore: no public repo URL was provided, so `codeUrl` is intentionally
// omitted here and the "View code" button will not render.
const projects: Project[] = [
  {
    tag: "Project — SaaS",
    title: "RevaCore",
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Supabase",
      "Paddle",
      "Twilio",
      "Groq/Gemini/OpenRouter",
    ],
    description:
      "AI-powered real estate CRM, built solo from architecture to production.",
    highlights: [
      "Synced 4,300+ live Dubai property listings into a public marketplace via the Bayut API",
      "Built a multi-provider AI lead-scoring cascade (Groq → Gemini → OpenRouter fallback) so scoring keeps working if one provider goes down",
      "Shipped WhatsApp + email inbox (Twilio/Resend) with AI-drafted replies and market-specific follow-up sequencing",
    ],
    liveUrl: REVACORE_LIVE_URL,
  },
  {
    tag: "Project — Client",
    title: "nyredeals.com",
    stack: ["WordPress", "PHP", "Custom Theme"],
    description:
      "Real estate platform built on a custom WordPress theme for a live client.",
    highlights: [
      "Built and maintain a custom WordPress/PHP theme for a real estate client",
      "Added a news and articles section using custom post types",
      "Manage hosting, deployment and ongoing site updates",
    ],
    liveUrl: NYREDEALS_URL,
  },
];

export default function Work() {
  return (
    <section
      id="projects"
      className="paper-grid border-t border-paper-line bg-paper py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-patina">
            Selected work
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            From first commit to production
          </h2>
          <p className="mt-4 text-ink/70">
            One solo SaaS build and one freelance client engagement — taken
            from architecture decisions to live, working software.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard className="h-full bg-paper p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-patina">
                    {p.tag}
                  </span>
                  <span className="mx-4 h-px flex-1 bg-ink/10" />
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm border border-ink/15 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-ink/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-ink/10 pt-5">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-ink/75"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm bg-brass px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
                    >
                      View live
                    </a>
                  )}
                  {p.codeUrl && (
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm border border-ink/20 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-ink"
                    >
                      View code
                    </a>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
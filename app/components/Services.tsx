import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

type Module = {
  tag: string;
  title: string;
  description: string;
  items: string[];
};

const modules: Module[] = [
  {
    tag: "Module — Web",
    title: "Real estate websites",
    description:
      "Property listing sites, investment landing pages, agent and brokerage sites, rental platforms — built to convert visitors into leads, not just look good.",
    items: [
      "Custom WordPress/PHP or React builds",
      "SEO-structured listing pages",
      "Lead capture forms & funnels",
      "News, blog & article systems",
    ],
  },
  {
    tag: "Module — CRM",
    title: "Software & platforms",
    description:
      "The systems behind the website — CRMs, portals, and dashboards that keep listings, leads, and deals in one place instead of five disconnected tools.",
    items: [
      "Custom CRMs & client portals",
      "Property marketplaces & aggregators",
      "Subscription billing & tiered access",
      "Multi-tenant, compliance-ready platforms",
    ],
  },
  {
    tag: "Module — Calc",
    title: "Deal analysis engines",
    description:
      "Underwriting and decision tools where the math has to be right, not just the interface — built on an Industrial Mathematics background.",
    items: [
      "Cash flow & ROI projection tools",
      "Comparative market analysis (CMA)",
      "Property scoring & ranking engines",
      "Risk, flood & zoning data aggregation",
    ],
  },
  {
    tag: "Module — AI",
    title: "AI automation",
    description:
      "So leads get a response in minutes, not hours — automation that keeps working even if one AI provider goes down or gets rate-limited.",
    items: [
      "AI lead scoring across multiple LLM providers for reliability",
      "AI-drafted replies across WhatsApp, email & web chat",
      "n8n workflows connecting CRM, calendar & listings",
      "Chatbots for listing Q&A, qualification & appointment booking",
    ],
  },
];

export default function Services() {
  return (
    <section id="work" className="paper-grid border-t border-paper-line bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-patina">
            What I build
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Four modules, one build
          </h2>
          <p className="mt-4 text-ink/70">
            Everything below is something I&apos;ve shipped for agents,
            investors, brokerages, and proptech founders — and can build for
            you, standalone or wired together into one pipeline.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 md:grid-cols-2">
          {modules.map((mod, i) => (
            <Reveal key={mod.title} delay={i * 0.08}>
              <TiltCard className="h-full bg-paper p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-patina">
                    {mod.tag}
                  </span>
                  <span className="h-px flex-1 mx-4 bg-ink/10" />
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                  {mod.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {mod.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-ink/10 pt-5">
                  {mod.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink/75"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
                      {item}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
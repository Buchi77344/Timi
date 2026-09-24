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
    title: "Websites that convert",
    description:
      "Business sites, landing pages, portfolios, church and non-profit sites, news and blog builds — any kind of website, designed to turn visitors into customers, not just look good.",
    items: [
      "Custom WordPress/PHP or React/Next.js builds",
      "SEO structure & performance built in from day one",
      "Lead capture forms & funnels",
      "News, blog & article systems you can self-manage",
    ],
  },
  {
    tag: "Module — Apps",
    title: "Web apps & platforms",
    description:
      "E-commerce stores, booking systems, marketplaces, school portals, and CRMs — the systems behind the website, keeping products, bookings, and clients in one place instead of five disconnected tools.",
    items: [
      "E-commerce stores with payments & order admin",
      "Booking & scheduling systems",
      "CRMs, dashboards & client portals",
      "Multi-tenant, role-based platforms",
    ],
  },
  {
    tag: "Module — Data",
    title: "Calculators & data tools",
    description:
      "Quoting engines, scoring models, and dashboards where the math has to be right, not just the interface — built on an Industrial Mathematics background.",
    items: [
      "Cost, ROI & savings calculators",
      "Scoring & ranking engines",
      "Dashboards & reporting",
      "Data pipelines aggregating dozens of external APIs",
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
      "n8n workflows connecting CRM, calendar & the tools you already use",
      "Chatbots for site Q&A, lead qualification & appointment booking",
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
            Everything below is something I&apos;ve shipped for clients and
            own products — and can build for you, standalone or wired
            together into one system.
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
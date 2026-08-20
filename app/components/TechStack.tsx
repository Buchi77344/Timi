import Reveal from "./Reveal";

const schedule: { label: string; value: string }[] = [
  {
    label: "Frontend",
    value: "React, Next.js, Astro, TypeScript, WordPress / PHP",
  },
  {
    label: "Backend",
    value: "Node.js, FastAPI, Django, Supabase — Postgres, Edge Functions, RLS",
  },
  { label: "AI / LLM", value: "OpenAI, Claude (Anthropic), Gemini, Groq, OpenRouter" },
  { label: "Automation", value: "n8n, custom API integrations" },
  { label: "Communications", value: "Twilio (WhatsApp), Resend / SendGrid (email)" },
  { label: "Payments", value: "Paddle, Stripe" },
  { label: "Deployment", value: "Vercel" },
];

export default function TechStack() {
  return (
    <section id="stack" className="border-t border-blueprint-light/10 bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-blueprint-light/20 pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-blueprint-light">
              Materials schedule
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              What it&apos;s built with
            </h2>
          </div>
          <p className="max-w-sm text-sm text-paper/60">
            The same stack across every project — chosen because it holds up
            in production, not because it&apos;s trendy.
          </p>
        </Reveal>

        <div className="mt-2">
          {schedule.map((row, i) => (
            <Reveal key={row.label} delay={i * 0.05} y={12}>
              <div className="grid grid-cols-[1fr] gap-1 border-b border-blueprint-light/10 py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
                <span className="font-mono text-[11px] uppercase tracking-widest text-brass">
                  {String(i + 1).padStart(2, "0")} — {row.label}
                </span>
                <span className="font-display text-base text-paper/85 sm:text-lg">
                  {row.value}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { NYREDEALS_URL, REVACORE_LIVE_URL } from "./config";

// Public GitHub repos for projects whose code can be shared.
const GH = "https://github.com/Buchi77344";

type Project = {
  tag: string;
  title: string;
  stack: string[];
  description: string;
  highlights: string[];
  liveUrl?: string;
  codeUrl?: string;
  /** Optional preview screenshot shown at the top of the card. */
  image?: string;
};

// Entries where `liveUrl` or `codeUrl` is omitted simply won't render that
// button — add the link here once it's ready to share.
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
    codeUrl: `${GH}/GetRevacore`,
    image: "/projects/revacore.png",
  },
  {
    tag: "Project — Client",
    title: "nyredeals.com",
    stack: ["WordPress", "PHP", "Custom Theme"],
    description:
      "Off-market property investment platform connecting serious buyers to income-producing NYC deals.",
    highlights: [
      "Built a custom WordPress/PHP theme geared toward discretion and exclusivity for off-market investment listings",
      "Added a news and articles section (custom post types) to build investor trust and authority",
      "Manage hosting, deployment and ongoing site updates for the live client",
    ],
    liveUrl: NYREDEALS_URL,
    codeUrl: `${GH}/NYRE-Deals`,
    image: "/projects/nyredeals.png",
  },
  {
    tag: "Project — AI Automation",
    title: "Landwiz",
    stack: ["n8n", "REST APIs", "UK Land Registry", "Automation"],
    description:
      "Property-intelligence workflow that scores seller propensity for UK real estate agents.",
    highlights: [
      "Aggregated and normalized data from ~21 external APIs into a single automated n8n pipeline",
      "Built a predictive propensity model to flag likely sellers for proactive agent outreach",
      "Grounded scoring in UK Land Registry data for national coverage and accuracy",
    ],
    image: "/projects/landwiz.jpg",
  },
  {
    tag: "Project — Client",
    title: "UK Rental Platform",
    // TODO: fill in the real stack — left empty rather than guessed so
    // you don't ship an inaccurate stack list to a client.
    stack: [],
    description:
      "Rental listings and management platform delivered for a UK-based client.",
    highlights: [
      "Delivered a full rental platform from requirements to launch for the client",
      // TODO: add 1-2 more concrete highlights, e.g. tenant/landlord
      // flows, listing search & filters, payments, or admin tooling —
      // whatever this build actually shipped.
    ],
    // liveUrl: "", // add once you can share it (check client permission first)
    image: "/projects/ukrental.jpg",
  },
  {
    tag: "Project — SaaS",
    title: "So Collab-able",
    stack: ["Django", "Python", "JavaScript", "Render"],
    description:
      "TikTok Shop influencer–brand collaboration platform, from dashboard to campaign management.",
    highlights: [
      "Built the full frontend: dashboard, messaging system, multi-step campaign wizard, and profile pages",
      "Designed the core navigation and UI architecture from scratch",
      "Deployed and configured for production on Render",
    ],
    image: "/projects/socollab.jpg",
  },
  {
    tag: "Project — Web App",
    title: "Fundraising Platform",
    stack: ["Django", "Python", "JavaScript", "HTML/CSS"],
    description:
      "Campaign fundraising site with featured, trending, and recent campaigns, live donation totals, and newsletter capture.",
    highlights: [
      "Homepage surfaces featured, trending, and active campaigns with live funding percentages",
      "Donation flow with per-campaign totals and progress tracking",
      "Auth + newsletter subscription with duplicate-email handling",
    ],
    codeUrl: `${GH}/Feed`,
    image: "/projects/fundraising-theme.jpg",
  },
  {
    tag: "Project — Web App",
    title: "Experiences Booking Platform",
    stack: ["Django", "Python", "Payments", "SQLite"],
    description:
      "Two-sided booking marketplace for experiences — vendor listings, bookings, and payments handled end to end.",
    highlights: [
      "Vendor onboarding with managed profiles and listings",
      "Booking flow wired to payment processing",
      "Admin tooling for experiences, vendors, and orders",
    ],
    codeUrl: `${GH}/booking`,
    image: "/projects/booking.jpg",
  },
  {
    tag: "Project — EdTech",
    title: "Edusmart",
    stack: ["Django", "Python", "HTML/CSS"],
    description:
      "School and e-learning platform combining a content-managed school site with an online training stream.",
    highlights: [
      "School website managed through Django admin — no dev needed for updates",
      "E-learning stream for courses, materials, and student access",
      "Role-based dashboards for admins, staff, and students",
    ],
    codeUrl: `${GH}/edusmart`,
    image: "/projects/edusmart.jpg",
  },
  {
    tag: "Project — EdTech",
    title: "CBT Exam Platform",
    stack: ["Django", "Python", "CSV Import"],
    description:
      "Computer-based testing system for creating, scheduling, and marking exams at scale.",
    highlights: [
      "Question-bank management with bulk CSV import",
      "Timed exam mode that mimics real CBT conditions",
      "Automatic scoring with instant results and review",
    ],
    codeUrl: `${GH}/cbt`,
    image: "/projects/cbt-exam.jpg",
  },
  {
    tag: "Project — E-commerce",
    title: "E-commerce Store",
    stack: ["Django", "Python", "JavaScript", "Payments"],
    description:
      "Full online store — catalog, cart, checkout, and order management built as one connected system.",
    highlights: [
      "Product catalog with categories, search, and detail pages",
      "Cart and checkout flow backed by order management",
      "Admin panel for products, orders, and customers",
    ],
    codeUrl: `${GH}/ecommerce`,
    image: "/projects/ecommerce.jpg",
  },
  {
    tag: "Project — Client",
    title: "Church Website",
    stack: ["Django", "Python", "HTML/CSS"],
    description:
      "Content-managed church website for sermons, events, and announcements — updatable by non-technical staff.",
    highlights: [
      "Sermons, events, and announcements managed from the admin",
      "Mobile-first design built for congregation traffic",
      "Fast, low-maintenance hosting setup",
    ],
    codeUrl: `${GH}/churchweb`,
    image: "/projects/churchweb.jpg",
  },
  {
    tag: "Project — Portfolio",
    title: "Festus — Developer Portfolio",
    stack: ["React", "TypeScript", "Vite"],
    description:
      "Interactive portfolio presenting full-stack and AI automation work, deployed on Vercel.",
    highlights: [
      "Component-driven UI designed and built from scratch",
      "Type-safe React + TypeScript codebase",
      "Deployed and served from Vercel",
    ],
    liveUrl: "https://festus-murex.vercel.app",
    codeUrl: `${GH}/Festus`,
    image: "/projects/festus-portfolio.png",
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
            12+ shipped builds — SaaS products, web apps, online stores,
            client sites, and AI automation — taken from architecture
            decisions to live, working software.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i, 6) * 0.06}>
              <TiltCard className="h-full bg-paper p-8 md:p-10">
                {p.image && (
                  <div className="mb-6 aspect-video w-full overflow-hidden rounded-sm border border-ink/10 bg-ink/5">
                    <img
                      src={p.image}
                      alt={`Screenshot of ${p.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top grayscale-[20%] transition-all duration-500 hover:grayscale-0"
                    />
                  </div>
                )}

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

                {p.stack.length > 0 && (
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
                )}

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
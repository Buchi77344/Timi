import Reveal from "./Reveal";
import { FIVERR_URL } from "./config";

// Fiverr has no public API for pulling reviews, so these are static entries
// copy-pasted verbatim from Timi's Fiverr dashboard. Don't paraphrase them.
type Testimonial = {
  quote: string;
  author: string;
  context: string;
  country: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Very reliable with excellent communication skills and good work.",
    author: "ashleyivette_",
    context: "Verified Fiverr review",
    country: "United States",
  },
  {
    quote:
      "AMAZING, every milestone has been 10/10 experience. He really goes above and beyond. He has great attention to detail, and when you describe something he's able to catch on quickly. The app flows well and looks great.",
    author: "irasamps",
    context: "App development",
    country: "United States",
  },
  {
    quote:
      "Really great job! I'm glad I went with him. He really understands the project and goes above and beyond! Ready for the second stage of this app development.",
    author: "irasamps",
    context: "App development",
    country: "United States",
  },
];

function USFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 19 10" className={className} aria-hidden="true">
      <g fill="#b22234">
        <rect width="19" height="0.769" y="0" />
        <rect width="19" height="0.769" y="1.538" />
        <rect width="19" height="0.769" y="3.077" />
        <rect width="19" height="0.769" y="4.615" />
        <rect width="19" height="0.769" y="6.154" />
        <rect width="19" height="0.769" y="7.692" />
        <rect width="19" height="0.769" y="9.231" />
      </g>
      <rect width="7.6" height="5.385" fill="#3c3b6e" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="paper-grid border-t border-paper-line bg-paper py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-patina">
            Client feedback
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            What clients say
          </h2>
          <p className="mt-4 text-ink/70">
            Actual review text from verified Fiverr orders — copy-pasted from
            the dashboard so nothing is paraphrased or invented.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08} className="h-full">
              <div className="h-full bg-paper/60 border border-ink/10 p-8 md:p-10">
                <span className="font-display text-4xl leading-none text-brass">
                  “
                </span>
                <p className="mt-3 font-display text-lg leading-relaxed tracking-tight text-ink">
                  {t.quote}
                </p>

                <div className="mt-6 border-t border-ink/10 pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink/70">
                    {t.author}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink/45">
                    <USFlag className="h-2.5 w-4.75" />
                    {t.country} · {t.context}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={FIVERR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-ink/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-ink hover:bg-ink/5"
          >
            See more reviews on Fiverr
          </a>
        </div>
      </div>
    </section>
  );
}
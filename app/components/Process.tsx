export default function Process() {
  return (
    <section id="process" className="border-t border-paper-line bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1fr] md:gap-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-patina">
            How I work
          </p>
          <p className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
            No account managers. No agency layers. No juniors touching your
            code — you talk directly to the person building your project.
          </p>
        </div>

        <div className="space-y-8 border-t border-ink/10 pt-8 md:border-t-0 md:pt-0">
          <div className="flex gap-4">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brass" />
            <p className="text-ink/70">
              A B.Sc. in Industrial Mathematics shows up in how the logic
              gets built — scoring models, calculators, and data pipelines
              are checked for correctness, not just wired up to look
              finished.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brass" />
            <p className="text-ink/70">
              Every project is scoped, built, and shipped by one developer —
              which means fewer handoffs, faster iteration, and someone who
              actually understands your system end to end.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brass" />
            <p className="text-ink/70">
              Comfortable working across the full pipeline — website, CRM,
              and automation — as one connected system rather than three
              separate vendors that don&apos;t talk to each other.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

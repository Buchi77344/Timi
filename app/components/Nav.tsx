import { FIVERR_URL, GITHUB_URL, RESUME_URL, WHATSAPP_URL } from "./config";
import { FiverrIcon, GitHubIcon, WhatsAppIcon } from "./icons";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-blueprint-light/20 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 text-paper">
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <circle cx="11" cy="11" r="9" fill="none" stroke="#6fa3cf" strokeWidth="1" />
            <line x1="11" y1="0" x2="11" y2="22" stroke="#6fa3cf" strokeWidth="1" />
            <line x1="0" y1="11" x2="22" y2="11" stroke="#6fa3cf" strokeWidth="1" />
            <circle cx="11" cy="11" r="2.5" fill="#b9812f" />
          </svg>
          <span className="font-display text-[15px] font-semibold tracking-tight">
            Timi Festus
          </span>
        </a>

        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-paper/70 md:flex">
          <a href="#projects" className="transition-colors hover:text-paper">
            Projects
          </a>
          <a href="#reviews" className="transition-colors hover:text-paper">
            Reviews
          </a>
          <a href="#work" className="transition-colors hover:text-paper">
            Services
          </a>
          <a href="#stack" className="transition-colors hover:text-paper">
            Stack
          </a>
          <a href="#process" className="transition-colors hover:text-paper">
            Process
          </a>
          <a href="#contact" className="transition-colors hover:text-paper">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-sm border border-paper/25 p-2 text-paper/70 transition-colors hover:border-paper hover:text-paper"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded-sm border border-paper/25 p-2 text-paper/70 transition-colors hover:border-paper hover:text-paper"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <a
            href={FIVERR_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr"
            className="rounded-sm border border-paper/25 p-2 text-paper/70 transition-colors hover:border-paper hover:text-paper"
          >
            <FiverrIcon className="h-4 w-4" />
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-sm border border-paper/30 px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper/80 transition-colors hover:border-paper hover:text-paper sm:inline-flex"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-brass px-4 py-2 font-mono text-xs uppercase tracking-widest text-brass transition-colors hover:bg-brass hover:text-ink"
          >
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}

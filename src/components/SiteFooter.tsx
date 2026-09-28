import { externalLinkProps } from '../lib/links';
import type { SocialLink } from '../types';

interface SiteFooterProps {
  name: string;
  contactEmail: string;
  socialLinks: readonly SocialLink[];
}

export function SiteFooter({ name, contactEmail, socialLinks }: SiteFooterProps) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          {name} · <span className="select-all">{contactEmail}</span>
        </p>
        <ul className="flex gap-5">
          {socialLinks.map((link) => (
            <li key={link.platform}>
              <a
                href={link.url}
                className="hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                {...externalLinkProps(link.url)}
              >
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

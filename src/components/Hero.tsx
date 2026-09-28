import { FileDown, Mail } from 'lucide-react';
import { externalLinkProps, publicFileUrl } from '../lib/links';
import type { Intro, SocialLink } from '../types';

interface HeroProps {
  intro: Intro;
  socialLinks: readonly SocialLink[];
}

export function Hero({ intro, socialLinks }: HeroProps) {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="mx-auto max-w-content px-5 pb-14 pt-12 md:px-8 md:pb-20 md:pt-20"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
        <div>
          <h1 className="font-serif text-5xl leading-none tracking-tight text-ink md:text-6xl">
            {intro.name}
          </h1>
          <p className="mt-3 text-xl text-ink-2 md:text-2xl">{intro.title}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{intro.summary}</p>

          {intro.highlights.length > 0 && (
            <dl className="mt-8 grid max-w-2xl grid-cols-3 border-y border-line">
              {intro.highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex flex-col py-4 pr-3 ${index > 0 ? 'border-l border-line pl-4' : ''}`}
                >
                  <dt className="order-2 text-sm leading-snug text-muted">{item.label}</dt>
                  <dd className="order-1 font-serif text-3xl text-ink tabular-nums md:text-4xl">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={`mailto:${intro.contactEmail}`} className="btn btn-primary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Get in touch
            </a>
            {intro.cvFile && (
              <a href={publicFileUrl(intro.cvFile)} download={intro.cvFile} className="btn btn-secondary">
                <FileDown className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            )}
            {intro.cvShortFile && (
              <a
                href={publicFileUrl(intro.cvShortFile)}
                download={intro.cvShortFile}
                className="btn btn-secondary"
              >
                <FileDown className="h-4 w-4" aria-hidden="true" />
                One-page CV
              </a>
            )}
          </div>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Profiles">
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  className="inline-flex items-center gap-1.5 text-ink-2 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  {...externalLinkProps(link.url)}
                >
                  <link.icon className="h-4 w-4" aria-hidden="true" />
                  {link.platform}
                </a>
              </li>
            ))}
          </ul>

          {intro.availability && <p className="mt-6 max-w-2xl text-sm text-muted">{intro.availability}</p>}
        </div>

        <img
          src={intro.profileImage}
          alt={`Portrait of ${intro.name}`}
          width={224}
          height={224}
          className="h-40 w-40 rounded-full border border-line object-cover md:h-56 md:w-56"
        />
      </div>
    </section>
  );
}

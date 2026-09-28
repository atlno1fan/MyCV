/** Attributes for links that leave the site: a new tab, with no opener or referrer handed over. */
export const externalLinkProps = (url: string) =>
  url.startsWith('http') ? ({ target: '_blank', rel: 'noopener noreferrer' } as const) : {};

/** Public files (the CV PDFs, images) live under the site's base path, which differs between dev and Pages. */
export const publicFileUrl = (file: string) => `${import.meta.env.BASE_URL}${file}`;

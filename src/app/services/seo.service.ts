import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  ogImage?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly BASE_URL = 'https://www.mtcrenovations.ca';
  private readonly DEFAULT_IMAGE = 'https://www.mtcrenovations.ca/assets/img/logo/png_01.png';

  constructor(
    private titleService: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  update(config: SeoConfig, path: string = ''): void {
    const canonical = path
      ? `${this.BASE_URL}/${path}`
      : this.BASE_URL;
    const ogImage = config.ogImage || this.DEFAULT_IMAGE;

    this.titleService.setTitle(config.title);

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });

    let link: HTMLLinkElement | null = this.doc.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
  }
}

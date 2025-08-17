/**
 * Content Models
 * 
 * This file contains JavaScript models for all main content types
 * defined in the content model (CONTENT-MODEL.md).
 */

import {
  SeoComponent,
  HeroComponent,
  OrgComponent,
  ProductSpecsComponent,
  AddressComponent,
  FeatureComponent,
  SocialLinkComponent,
  UseCaseComponent
} from './ComponentModels.js';

/**
 * Site Settings Model (Single Type)
 * Used for global site settings
 */
export class SiteSettings {
  constructor(data = {}) {
    this.siteName = data.siteName || '';
    this.logo = data.logo || null;
    this.address = data.address ? new AddressComponent(data.address) : new AddressComponent();
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.socials = data.socials ? data.socials.map(s => new SocialLinkComponent(s)) : [];
    this.defaultSeo = data.defaultSeo ? new SeoComponent(data.defaultSeo) : new SeoComponent();
    this.schemaOrg = data.schemaOrg ? new OrgComponent(data.schemaOrg) : new OrgComponent();
  }

  static fromApiResponse(data) {
    return new SiteSettings(data);
  }

  toApiFormat() {
    return {
      siteName: this.siteName,
      logo: this.logo,
      address: this.address.toApiFormat(),
      email: this.email,
      phone: this.phone,
      socials: this.socials.map(s => s.toApiFormat()),
      defaultSeo: this.defaultSeo.toApiFormat(),
      schemaOrg: this.schemaOrg.toApiFormat()
    };
  }
}

/**
 * Page Model (Collection)
 * Used for static pages
 */
export class Page {
  constructor(data = {}) {
    this.id = data.id || null;
    // Handle both lowercase and capitalized field names from Strapi
    this.title = data.title || data.Title || '';
    this.slug = data.slug || data.Slug || '';
    this.hero = data.hero ? new HeroComponent(data.hero) : (data.Hero ? new HeroComponent(data.Hero) : new HeroComponent());
    this.blocks = data.blocks || data.Blocks || [];
    this.seo = data.seo ? new SeoComponent(data.seo) : (data.SEO ? new SeoComponent(data.SEO) : new SeoComponent());
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  static fromApiResponse(data) {
    return new Page(data);
  }

  toApiFormat() {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
      hero: this.hero.toApiFormat(),
      blocks: this.blocks,
      seo: this.seo.toApiFormat(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

/**
 * Service Model (Collection)
 * Used for service pages
 */
export class Service {
  constructor(data = {}) {
    this.id = data.id || null;
    this.title = data.title || '';
    this.slug = data.slug || '';
    this.summary = data.summary || '';
    this.details = data.details || '';
    this.features = data.features ? data.features.map(f => new FeatureComponent(f)) : [];
    this.ctaLabel = data.ctaLabel || '';
    this.seo = data.seo ? new SeoComponent(data.seo) : new SeoComponent();
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  static fromApiResponse(data) {
    return new Service(data);
  }

  toApiFormat() {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
      summary: this.summary,
      details: this.details,
      features: this.features.map(f => f.toApiFormat()),
      ctaLabel: this.ctaLabel,
      seo: this.seo.toApiFormat(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

/**
 * Product Model (Collection)
 * Used for product pages
 */
export class Product {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.slug = data.slug || '';
    this.category = data.category || '';
    this.description = data.description || '';
    this.specs = data.specs ? new ProductSpecsComponent(data.specs) : new ProductSpecsComponent();
    this.certifications = data.certifications || [];
    this.images = data.images || [];
    this.price = data.price || '';
    this.featured = data.featured || false;
    this.badge = data.badge || '';
    this.linkText = data.linkText || 'View Details';
    this.linkUrl = data.linkUrl || '';
    this.seo = data.seo ? new SeoComponent(data.seo) : new SeoComponent();
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  static fromApiResponse(data) {
    return new Product(data);
  }

  // Getter for component compatibility
  get title() {
    return this.name;
  }

  // Getter for component compatibility
  get image() {
    return this.images && this.images.length > 0 ? this.images[0] : '';
  }

  toApiFormat() {
    return {
      id: this.id,
      name: this.name,
      slug: this.slug,
      category: this.category,
      description: this.description,
      specs: this.specs.toApiFormat(),
      certifications: this.certifications,
      images: this.images,
      price: this.price,
      featured: this.featured,
      badge: this.badge,
      linkText: this.linkText,
      linkUrl: this.linkUrl,
      seo: this.seo.toApiFormat(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

/**
 * Industry Model (Collection)
 * Used for industry pages
 */
export class Industry {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.slug = data.slug || '';
    this.useCases = data.useCases ? data.useCases.map(u => new UseCaseComponent(u)) : [];
    this.recommendedProducts = data.recommendedProducts || [];
    this.seo = data.seo ? new SeoComponent(data.seo) : new SeoComponent();
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  static fromApiResponse(data) {
    return new Industry(data);
  }

  toApiFormat() {
    return {
      id: this.id,
      name: this.name,
      slug: this.slug,
      useCases: this.useCases.map(u => u.toApiFormat()),
      recommendedProducts: this.recommendedProducts,
      seo: this.seo.toApiFormat(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

/**
 * Certification Model (Collection)
 * Used for certification pages
 */
export class Certification {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.type = data.type || '';
    this.description = data.description || '';
    this.certificateFile = data.certificateFile || null;
    this.validFrom = data.validFrom || null;
    this.validTo = data.validTo || null;
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  static fromApiResponse(data) {
    return new Certification(data);
  }

  toApiFormat() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      description: this.description,
      certificateFile: this.certificateFile,
      validFrom: this.validFrom,
      validTo: this.validTo,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

/**
 * Partner Model (Collection)
 * Used for partner pages
 */
export class Partner {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.logo = data.logo || null;
    this.type = data.type || '';
    this.quote = data.quote || '';
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  static fromApiResponse(data) {
    return new Partner(data);
  }

  toApiFormat() {
    return {
      id: this.id,
      name: this.name,
      logo: this.logo,
      type: this.type,
      quote: this.quote,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

/**
 * Post Model (Collection)
 * Used for blog posts
 */
export class Post {
  constructor(data = {}) {
    this.id = data.id || null;
    this.title = data.title || '';
    this.slug = data.slug || '';
    this.author = data.author || '';
    this.category = data.category || null;
    this.tags = data.tags || [];
    this.cover = data.cover || null;
    this.excerpt = data.excerpt || '';
    this.body = data.body || '';
    this.publishedAt = data.publishedAt || null;
    this.seo = data.seo ? new SeoComponent(data.seo) : new SeoComponent();
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  static fromApiResponse(data) {
    return new Post(data);
  }

  toApiFormat() {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
      author: this.author,
      category: this.category,
      tags: this.tags,
      cover: this.cover,
      excerpt: this.excerpt,
      body: this.body,
      publishedAt: this.publishedAt,
      seo: this.seo.toApiFormat(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

/**
 * Category Model (Collection)
 * Used for blog categories
 */
export class Category {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.slug = data.slug || '';
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  static fromApiResponse(data) {
    return new Category(data);
  }

  toApiFormat() {
    return {
      id: this.id,
      name: this.name,
      slug: this.slug,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

/**
 * Tag Model (Collection)
 * Used for blog tags
 */
export class Tag {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.slug = data.slug || '';
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  static fromApiResponse(data) {
    return new Tag(data);
  }

  toApiFormat() {
    return {
      id: this.id,
      name: this.name,
      slug: this.slug,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
} 
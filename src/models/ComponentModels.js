/**
 * Component Models
 * 
 * This file contains JavaScript models for all reusable components
 * defined in the content model (CONTENT-MODEL.md).
 */

/**
 * SEO Component Model
 * Used for SEO metadata across content types
 */
export class SeoComponent {
  constructor(data = {}) {
    this.title = data.title || '';
    this.description = data.description || '';
    this.image = data.image || null;
  }

  static fromApiResponse(data) {
    return new SeoComponent(data);
  }

  toApiFormat() {
    return {
      title: this.title,
      description: this.description,
      image: this.image
    };
  }
}

/**
 * Hero Component Model
 * Used for page hero sections
 */
export class HeroComponent {
  constructor(data = {}) {
    this.title = data.title || '';
    this.subtitle = data.subtitle || '';
    this.image = data.image || null;
  }

  static fromApiResponse(data) {
    return new HeroComponent(data);
  }

  toApiFormat() {
    return {
      title: this.title,
      subtitle: this.subtitle,
      image: this.image
    };
  }
}

/**
 * Organization Component Model
 * Used for organization information
 */
export class OrgComponent {
  constructor(data = {}) {
    this.orgName = data.orgName || '';
    this.legalName = data.legalName || '';
    this.parentOrganization = data.parentOrganization || '';
  }

  static fromApiResponse(data) {
    return new OrgComponent(data);
  }

  toApiFormat() {
    return {
      orgName: this.orgName,
      legalName: this.legalName,
      parentOrganization: this.parentOrganization
    };
  }
}

/**
 * Product Specifications Component Model
 * Used for product specifications
 */
export class ProductSpecsComponent {
  constructor(data = {}) {
    this.origin = data.origin || '';
    this.grade = data.grade || '';
    this.moq = data.moq || '';
    this.packaging = data.packaging || '';
  }

  static fromApiResponse(data) {
    return new ProductSpecsComponent(data);
  }

  toApiFormat() {
    return {
      origin: this.origin,
      grade: this.grade,
      moq: this.moq,
      packaging: this.packaging
    };
  }
}

/**
 * Address Component Model
 * Used for address information
 */
export class AddressComponent {
  constructor(data = {}) {
    this.line1 = data.line1 || '';
    this.line2 = data.line2 || '';
    this.city = data.city || '';
    this.region = data.region || '';
    this.country = data.country || '';
    this.postcode = data.postcode || '';
  }

  static fromApiResponse(data) {
    return new AddressComponent(data);
  }

  toApiFormat() {
    return {
      line1: this.line1,
      line2: this.line2,
      city: this.city,
      region: this.region,
      country: this.country,
      postcode: this.postcode
    };
  }
}

/**
 * Feature Component Model
 * Used for feature lists
 */
export class FeatureComponent {
  constructor(data = {}) {
    this.title = data.title || '';
    this.text = data.text || '';
    this.icon = data.icon || '';
  }

  static fromApiResponse(data) {
    return new FeatureComponent(data);
  }

  toApiFormat() {
    return {
      title: this.title,
      text: this.text,
      icon: this.icon
    };
  }
}

/**
 * Social Link Component Model
 * Used for social media links
 */
export class SocialLinkComponent {
  constructor(data = {}) {
    this.name = data.name || '';
    this.url = data.url || '';
  }

  static fromApiResponse(data) {
    return new SocialLinkComponent(data);
  }

  toApiFormat() {
    return {
      name: this.name,
      url: this.url
    };
  }
}

/**
 * Use Case Component Model
 * Used for industry use cases
 */
export class UseCaseComponent {
  constructor(data = {}) {
    this.title = data.title || '';
    this.description = data.description || '';
  }

  static fromApiResponse(data) {
    return new UseCaseComponent(data);
  }

  toApiFormat() {
    return {
      title: this.title,
      description: this.description
    };
  }
} 
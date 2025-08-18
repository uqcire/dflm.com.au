/**
 * Blog Component Models
 * 
 * This file contains JavaScript models for reusable components
 * used with blog content in the Strapi CMS integration.
 */

/**
 * SEO Component Model
 * Used for SEO metadata across blog content types
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
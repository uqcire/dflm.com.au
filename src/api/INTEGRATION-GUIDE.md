# API Integration Guide

This guide explains how to use the API client system for seamless integration between mock data and Strapi CMS.

## Overview

The API integration system provides:

1. **Mock API Client** - Realistic mock data for development
2. **Strapi API Client** - Production-ready Strapi CMS integration
3. **Environment Configuration** - Easy switching between modes
4. **Unified Interface** - Same API calls work with both mock and real data

## Quick Start

### 1. Basic Usage

```javascript
// Import the API client
import { getSiteSettings, getPages, getServices } from '@/api/mockApiClient.js';

// Use the same API calls regardless of data source
const siteSettings = await getSiteSettings();
const pages = await getPages({ page: 1, pageSize: 10 });
const services = await getServices();
```

### 2. Environment Configuration

Create a `.env.local` file in your project root:

```bash
# Development with mock data (default)
VITE_USE_MOCK_API=true
VITE_STRAPI_ENABLED=false

# Development with Strapi
VITE_USE_MOCK_API=false
VITE_STRAPI_ENABLED=true
VITE_STRAPI_API_URL=http://localhost:1337

# Production
VITE_USE_MOCK_API=false
VITE_STRAPI_ENABLED=true
VITE_STRAPI_API_URL=https://your-strapi-instance.com
```

## API Methods

### Site Settings

```javascript
import { getSiteSettings } from '@/api/mockApiClient.js';

// Get global site settings
const siteSettings = await getSiteSettings();
console.log(siteSettings.data.siteName);
```

### Pages

```javascript
import { getPages, getPageBySlug, getPageById } from '@/api/mockApiClient.js';

// Get all pages with pagination
const pages = await getPages({ 
  page: 1, 
  pageSize: 10,
  sort: 'createdAt'
});

// Get page by slug
const homePage = await getPageBySlug('home');

// Get page by ID
const page = await getPageById(1);
```

### Services

```javascript
import { getServices, getServiceBySlug, getServiceById } from '@/api/mockApiClient.js';

// Get all services
const services = await getServices();

// Get service by slug
const importService = await getServiceBySlug('import-distribution');

// Get service by ID
const service = await getServiceById(1);
```

### Products

```javascript
import { getProducts, getProductBySlug, getProductById } from '@/api/mockApiClient.js';

// Get products with filters
const products = await getProducts({
  filters: { category: 'garlic' },
  page: 1,
  pageSize: 20
});

// Get product by slug
const garlic = await getProductBySlug('premium-garlic');
```

### Blog Posts

```javascript
import { getPosts, getPostBySlug, getPostById } from '@/api/mockApiClient.js';

// Get published posts
const posts = await getPosts({
  filters: { published: true },
  sort: 'publishedAt',
  page: 1,
  pageSize: 10
});

// Get post by slug
const post = await getPostBySlug('future-food-import-australia');
```

### Categories and Tags

```javascript
import { getCategories, getTags } from '@/api/mockApiClient.js';

// Get all categories
const categories = await getCategories();

// Get all tags
const tags = await getTags();
```

## Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `VITE_USE_MOCK_API` | Enable mock API data | `true` | No |
| `VITE_STRAPI_ENABLED` | Enable Strapi integration | `false` | No |
| `VITE_STRAPI_API_URL` | Strapi API base URL | `http://localhost:1337` | No |
| `VITE_STRAPI_MEDIA_URL` | Strapi media base URL | `` | No |
| `VITE_STRAPI_TOKEN` | Strapi API token | `` | No |
| `VITE_API_TIMEOUT` | API timeout (ms) | `30000` | No |
| `VITE_API_RETRY_ATTEMPTS` | Retry attempts | `3` | No |

### Configuration Helpers

```javascript
import { 
  getApiMode, 
  isMockApiEnabled, 
  isStrapiEnabled,
  setupApiEnvironment 
} from '@/api/envConfig.js';

// Check current API mode
const mode = getApiMode(); // 'mock', 'strapi', or 'hybrid'

// Check if mock API is enabled
if (isMockApiEnabled()) {
  console.log('Using mock data');
}

// Check if Strapi is enabled
if (isStrapiEnabled()) {
  console.log('Using Strapi API');
}

// Setup and validate environment
const setup = setupApiEnvironment();
console.log('Setup result:', setup);
```

## Error Handling

The API client includes comprehensive error handling:

```javascript
import { getPages } from '@/api/mockApiClient.js';

try {
  const pages = await getPages();
  console.log('Pages loaded:', pages.data);
} catch (error) {
  console.error('Error loading pages:', error.message);
  
  // Handle specific error types
  if (error.message.includes('Network error')) {
    // Handle network issues
  } else if (error.message.includes('not found')) {
    // Handle not found errors
  } else if (error.message.includes('Authentication failed')) {
    // Handle auth errors
  }
}
```

## Strapi Integration

### Authentication

```javascript
import { 
  setStrapiToken, 
  getStrapiToken, 
  removeStrapiToken,
  isStrapiTokenValid 
} from '@/api/strapiApiConfig.js';

// Set authentication token
setStrapiToken('your-jwt-token', true); // true for localStorage

// Check if token is valid
if (isStrapiTokenValid(getStrapiToken())) {
  console.log('Token is valid');
}

// Remove token on logout
removeStrapiToken();
```

### Media Handling

```javascript
import { getMediaUrl } from '@/api/strapiApiConfig.js';

// Get media URL with format
const imageUrl = getMediaUrl('/uploads/image.jpg', 'medium');
console.log(imageUrl); // https://strapi.com/uploads/image_medium.jpg
```

### Custom Queries

```javascript
import { strapiClient, formatStrapiParams } from '@/api/strapiApiConfig.js';

// Custom query with filters
const params = formatStrapiParams({
  filters: {
    slug: 'home',
    published: true
  },
  populate: 'deep',
  sort: 'createdAt'
});

const response = await strapiClient.get('/pages', { params });
```

## Development Workflow

### 1. Start with Mock Data

```bash
# .env.local
VITE_USE_MOCK_API=true
VITE_STRAPI_ENABLED=false
```

Build your components using mock data:

```javascript
// This will use mock data
const services = await getServices();
```

### 2. Test with Strapi

```bash
# .env.local
VITE_USE_MOCK_API=false
VITE_STRAPI_ENABLED=true
VITE_STRAPI_API_URL=http://localhost:1337
```

The same code now uses real Strapi data:

```javascript
// This will use Strapi API
const services = await getServices();
```

### 3. Deploy to Production

```bash
# Production environment
VITE_USE_MOCK_API=false
VITE_STRAPI_ENABLED=true
VITE_STRAPI_API_URL=https://your-strapi-instance.com
VITE_STRAPI_MEDIA_URL=https://your-strapi-instance.com
```

## Testing

### Run API Tests

```javascript
import { runAllTests, runTest } from '@/api/TEST__MOCK-API--DEMO.js';

// Run all tests
await runAllTests();

// Run specific test
await runTest('pages');
```

### Test Configuration

```javascript
import { validateEnvConfig } from '@/api/envConfig.js';

const validation = validateEnvConfig();
if (!validation.valid) {
  console.error('Environment validation failed:', validation.errors);
}
```

## Troubleshooting

### Common Issues

1. **Mock data not loading**
   - Check `VITE_USE_MOCK_API=true`
   - Verify no console errors

2. **Strapi connection failed**
   - Check `VITE_STRAPI_API_URL` is correct
   - Verify Strapi is running
   - Check CORS settings in Strapi

3. **Authentication errors**
   - Verify `VITE_STRAPI_TOKEN` is set
   - Check token is valid and not expired

4. **Media not loading**
   - Set `VITE_STRAPI_MEDIA_URL` correctly
   - Check media permissions in Strapi

### Debug Mode

```javascript
import { logApiConfig } from '@/api/mockApiClient.js';

// Log current configuration
logApiConfig();
```

## Migration from Mock to Strapi

### 1. Prepare Strapi

- Set up content types matching your models
- Configure permissions for public access
- Set up media uploads

### 2. Update Environment

```bash
# Switch from mock to Strapi
VITE_USE_MOCK_API=false
VITE_STRAPI_ENABLED=true
VITE_STRAPI_API_URL=http://localhost:1337
```

### 3. Test Integration

```javascript
// Test each endpoint
const siteSettings = await getSiteSettings();
const pages = await getPages();
const services = await getServices();
```

### 4. Handle Differences

Mock and Strapi responses may have slight differences:

```javascript
// Mock response structure
{
  data: { title: "Home", slug: "home" },
  meta: { pagination: {...} }
}

// Strapi response structure
{
  data: { 
    id: 1,
    attributes: { title: "Home", slug: "home" }
  },
  meta: { pagination: {...} }
}
```

The API client handles these differences automatically.

## Best Practices

1. **Always use the API client methods** - Don't call HTTP directly
2. **Handle errors gracefully** - Use try/catch blocks
3. **Use environment variables** - Don't hardcode URLs
4. **Test both modes** - Verify mock and Strapi work
5. **Validate responses** - Check data structure
6. **Use pagination** - For large datasets
7. **Cache when appropriate** - Reduce API calls

## File Structure

```
src/api/
├── mockApiResponses.js      # Mock data responses
├── mockApiClient.js         # Main API client
├── strapiApiConfig.js       # Strapi configuration
├── envConfig.js            # Environment configuration
├── index.js                # Service exports
├── pageService.js          # Page-specific services
├── siteSettingsService.js  # Site settings service
├── TEST__MOCK-API--DEMO.js # Test suite
└── INTEGRATION-GUIDE.md    # This guide
```

## Support

For issues or questions:

1. Check the console for error messages
2. Verify environment configuration
3. Test with mock data first
4. Check Strapi logs if using real API
5. Review this guide for common solutions 
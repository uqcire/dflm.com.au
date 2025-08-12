# CMS SETUP — STRAPI + SUPABASE (RENDER)

## STATUS — PROJECT SETUP PROGRESS
- Date: 2025-08-12
- Completed:
  - Permissions configured in Strapi (Render) for the Public role as per Step 4.
- Deferred (do later):
  - Step 5 — Webhooks: not implemented yet. Defer until deploy pipeline and site build strategy are defined. Site development has not started.
- Resume when:
  - Decide build strategy (SSG vs CSR/SSR).
  - If SSG: create a Vercel Deploy Hook, then add Strapi webhooks for publish/unpublish (others optional).
  - If CSR/SSR: deploy webhooks may be unnecessary.

## 1) Supabase
- Create project; copy Postgres connection string (append `?sslmode=require`)
- Example: `postgresql://postgres:YOUR_PASSWORD@YOUR_REF.supabase.co:5432/postgres?sslmode=require`
- Storage: create bucket `uploads`
- API: copy Project URL and Service Role Key
- Tip: keep a single `DATABASE_URL` with SSL for Render; a direct session URL is not required unless a tool specifically asks for it later.

## 2) Strapi Repo
- Initialize latest Strapi: `npx create-strapi-app@latest cms`
- Install deps: `npm i pg strapi-provider-upload-supabase`
- Commit configs: database, plugins, server, middlewares

### config/database.js
```js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL', {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false,
    }),
    pool: { min: 0, max: 10 },
  },
});
```

### config/plugins.js
```js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-supabase',
      providerOptions: {
        apiUrl: env('SUPABASE_URL'),
        apiKey: env('SUPABASE_SERVICE_ROLE_KEY'),
        bucket: env('SUPABASE_BUCKET', 'uploads'),
        directory: env('SUPABASE_DIRECTORY', ''),
      },
    },
  },
});
```

### config/server.js
```js
module.exports = ({ env }) => ({
  url: env('PUBLIC_URL'),
  proxy: true,
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: { keys: env.array('APP_KEYS') },
});
```

### config/middlewares.js
```js
module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

### config/env/production/middlewares.js
```js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          // Allow Supabase Storage previews in admin if needed
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  { name: 'strapi::cors', config: {
      origin: [
        'https://your-frontend.vercel.app',
        'https://www.your-domain.com',
      ],
      methods: ['GET','POST','PUT','PATCH','DELETE','HEAD','OPTIONS'],
      headers: ['Content-Type','Authorization','Range'],
      keepHeaderOnError: true,
  } },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

## 3) Render Service
- Connect repo; Node runtime; region near AU
- Build: `npm ci && npm run build`; Start: `npm run start`
- Env vars:
  - `NODE_ENV=production`
  - `HOST=0.0.0.0`
  - `PORT=1337`
  - `PUBLIC_URL=https://your-strapi.onrender.com`
  - `APP_KEYS, API_TOKEN_SALT, ADMIN_JWT_SECRET, TRANSFER_TOKEN_SALT`
  - `DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@YOUR_REF.supabase.co:5432/postgres?sslmode=require`
  - `SUPABASE_URL=https://YOUR_REF.supabase.co`
  - `SUPABASE_SERVICE_ROLE_KEY=<service role key>`
  - `SUPABASE_BUCKET=uploads`
- Notes:
  - Use free plan initially; cold starts can add ~30–60s on first request.
  - For zero-downtime, consider Cloudinary as upload provider (see Render docs) or paid instances.

## 4) Permissions
- Public role: enable find/findOne for Page, Service, Product, Industry, Certification, Partner, Post, Category, Tag

## 5) Webhooks
- In Strapi → Settings → Webhooks: add Vercel Deploy Hook URL
- Events: publish/unpublish for key content types

## 6) Verify
- Create admin user; create sample content; publish → confirm Vercel build triggers 
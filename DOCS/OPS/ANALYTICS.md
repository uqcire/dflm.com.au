# ANALYTICS

## Option A — Umami Cloud (current choice)
- Add this to `index.html` inside `<head>`:
```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="fb3c346e-f7bf-4ad7-a758-d4a60e1ea11d"></script>
```
- Optional event for mailto clicks:
```html
<script>
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="mailto:"]');
    if (a && window.umami) umami('Contact Email Click');
  });
</script>
```
- Dashboard: log in to Umami Cloud → copy Website ID (already configured above).

## Option B — GA4 (alternative)
- Create GA4 property; get Measurement ID (G‑XXXX)
- Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXX');
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="mailto:"]');
    if (a) gtag('event', 'contact_email_click', { method: 'mailto' });
  });
</script>
```

## Reporting
- Track: sessions, top landing pages, countries, devices
- Event: Contact Email Click
- Use Google Search Console for queries/CTR; review monthly

## Later (optional) — Self‑hosted Umami on Vercel + Supabase
- Switch when desired to own instance; env vars: `DATABASE_URL`, `DIRECT_DATABASE_URL`, `HASH_SALT`
- Deploy steps are available in community guides; we can add them when you’re ready. 
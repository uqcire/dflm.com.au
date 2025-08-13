# OPS — ANALYTICS

## Decision
- Chosen stack: Umami Cloud (primary)
- Alternative (optional): Google Analytics 4
- Rationale: privacy-friendly, simple setup, free Cloud tier, lightweight script

## Implementation
- Snippet already added in `index.html` (before </head>):

```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="fb3c346e-f7bf-4ad7-a758-d4a60e1ea11d"></script>
```

- Do not duplicate the script. Keep a single tag.
- No env vars needed for Cloud script. Keep the website ID in this doc for reference.

## Custom event tracking
Prefer no-code data attributes for common interactions.

- Mailto link:
```html
<a href="mailto:info@dflm.com.au" data-umami-event="contact_mailto">Email us</a>
```

- Outbound link:
```html
<a href="https://partner.example" target="_blank" rel="noopener" data-umami-event="outbound_link" data-umami-event-url="https://partner.example">Partner site</a>
```

- CTA button:
```html
<button type="button" data-umami-event="cta_primary">Get in touch</button>
```

Programmatic (if needed):
```html
<script>
  // window.umami is available after the script loads
  // umami.track(eventName, eventData?)
  window.umami && window.umami.track('cta_primary', { location: 'hero' })
</script>
```

## Reporting and goals
- Configure events in Umami dashboard to create goals for: contact_mailto, outbound_link, cta_primary.
- Segment by path to distinguish landing vs future pages when they go live.

## Privacy notes
- Umami Cloud is cookie-less by default; IP anonymized.
- Complies with common privacy regulations; add a short analytics note to site privacy policy later.

## QA checklist
- Verify pageviews appear in Umami after first visit.
- Click mailto/CTA/outbound links and confirm events are recorded.
- Ensure only one script tag exists in `index.html`.

## Next
- When pages go live, add page-specific events (e.g., product inquiry clicks) using the same data attributes. 
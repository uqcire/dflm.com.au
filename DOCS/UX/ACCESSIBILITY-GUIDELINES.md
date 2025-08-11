# ACCESSIBILITY GUIDELINES

## Structure
- One H1 per page; logical heading order
- Landmarks: header, nav, main, footer
- Breadcrumbs (optional) with proper nav semantics

## Keyboard
- Full keyboard operability; visible focus
- Skip to content link

## Forms & Controls
- Explicit labels and instructions
- Error messages with role=alert and clear guidance

## Media
- Images with descriptive alt; decorative images hidden
- Avoid autoplaying video/audio; provide captions/transcripts

## Color & Contrast
- Text contrast ≥ 4.5:1 (normal), 3:1 (large)
- Don’t rely on color alone for meaning

## Motion
- Respect reduced motion preferences

## ARIA
- Prefer semantic HTML; use ARIA only when necessary

## Testing
- Automated: axe/lighthouse
- Manual: keyboard testing, screen reader spot checks 
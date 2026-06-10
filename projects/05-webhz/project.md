# Power Grid Frequency Monitor

**Subtitle:** Real-time AC grid frequency dashboard — ESP32 → Supabase → GitHub Pages
**Path:** https://dgimbialo.github.io/webHz
**Platform:** Vanilla JS + Chart.js 4.4.0 + Supabase REST API + GitHub Pages
**GitHub:** https://github.com/dgimbialo/webHz.github.io
**Pair System:** CrossZeroDetector (#11)

## Purpose

Fully serverless real-time dashboard that visualises power grid frequency. 
An ESP32 measures zero-crossing frequency every second and writes directly to Supabase — the browser reads via REST API with a publishable anon key. 
No server, no backend code. 
Hosted for free on GitHub Pages as a pure static site.

## Key Features

- Real-time polling every 2 s via Supabase REST API (read-only anon key)
- Smart drip queue — live mode: 1 point/s animation; backlog: instant flush
- Null injection for gaps > 12 s — visible breaks instead of connecting lines
- Viewport anchoring — live data scrolls to now; historical anchors to last point
- Auto Y-scale always keeps 50.000 Hz nominal line in view
- Data Age indicator — X:YY min format; turns red when data is older than 2 min
- Range buttons 1 min – 48 h; user selection preserved (no auto-override)
- EN / UA full i18n — units, labels, range buttons, badges
- CSV export of all visible data points
- PWA-ready: site.webmanifest, theme-color, standalone display
- Security: CSP meta tag, X-Content-Type-Options, Referrer-Policy, security.txt

## Tech Stack

| Component | Technology |
|---|---|
| Language | Vanilla JS (ES2020), HTML5, CSS3 |
| Charts | Chart.js 4.4.0 + chartjs-adapter-date-fns + chartjs-plugin-zoom |
| Database | Supabase (PostgreSQL + PostgREST + RLS) |
| Hosting | GitHub Pages (static, CDN, HTTPS) |
| Fonts | Orbitron + Inter (Google Fonts) |
| i18n | Custom EN/UA translation module |
| PWA | site.webmanifest + theme-color |

## Media

### Photos

- projects/05-webhz/foto/Foto_1.png
- projects/05-webhz/foto/Foto_2.png

### Videos

## Notes

Service-role key lives only in ESP32 firmware.

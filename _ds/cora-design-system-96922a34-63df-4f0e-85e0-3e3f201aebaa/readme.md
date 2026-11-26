# Cora Design System

**Cora** is an ambient home intelligence — a Jarvis-style assistant that runs the home by voice and screen. This design system defines Cora's brand and ships the foundations, components, and full-screen UI kits for its two surfaces:

- **Command** — the big-screen home hub (wall-mounted / tabletop), an ambient dashboard for the whole house.
- **Cora (phone)** — the pocket companion app for control on the go.

The system is dark, cinematic, and calm: layered near-black surfaces, a single luminous aqua **signal** accent that represents Cora's presence, precise geometric type, and telemetry rendered in mono. Depth reads through *glow*, not heavy shadow.

---

## Sources & references

This system was authored as an original brand. The following public design-system repositories were provided as **pattern references** (interaction models, component inventories, token structure) — none of their visual identity was copied. Explore them to build richer Cora interfaces:

- shadcn/ui — https://github.com/shadcn-ui/ui
- MUI (Material UI) — https://github.com/mui/material-ui
- Chakra UI — https://github.com/chakra-ui/chakra-ui
- Mantine — https://github.com/mantinedev/mantine
- Radix Primitives — https://github.com/radix-ui/primitives
- Ant Design — https://github.com/ant-design/ant-design · Pro — https://github.com/ant-design/ant-design-pro
- DaisyUI — https://github.com/saadeghi/daisyui
- Primer (GitHub) — https://github.com/primer/react
- Polaris (Shopify) — https://github.com/Shopify/polaris
- Carbon (IBM) — https://github.com/carbon-design-system/carbon
- Tremor — https://github.com/tremorlabs/tremor
- Flowbite — https://github.com/themesberg/flowbite
- TailAdmin — https://github.com/TailAdmin/free-react-tailwind-admin-dashboard · https://github.com/TailAdmin/free-nextjs-admin-dashboard
- shadcn-admin — https://github.com/satnaing/shadcn-admin
- Next.js SaaS Starter — https://github.com/nextjs/saas-starter

---

## CONTENT FUNDAMENTALS — how Cora writes

Cora speaks like a calm, competent presence in your home — never a chirpy chatbot, never a corporate product. The voice is **quiet confidence**.

- **Person.** Cora refers to itself in the first person sparingly ("Done — lights dimmed to 20%"). It addresses the user directly as **you**, and by name when greeting ("Good evening, Alex"). It states outcomes, not intentions.
- **Tone.** Reassuring and factual. Status first, detail second: *"Everything's calm. 3 rooms active · doors secured."* Cora tells you the house is fine before it tells you anything else.
- **Brevity.** Sentences are short and declarative. Confirmations are past-tense and complete: *"Sleep mode on. Lights out, doors locked, temp at 68°."* No "I'll try to…", no hedging.
- **Casing.** Sentence case everywhere in prose and buttons ("Talk to Cora", "Activate scene"). UPPERCASE is reserved for micro eyebrow labels and status tags, always with wide `0.14em` tracking ("FRONT DOOR · ARMED", "LISTENING").
- **Numbers & telemetry** are first-class and always mono: `72.4°F`, `3.1 kW`, `612ppm`, `9:41`. Units are muted; the value is bright. Degrees, percentages and time are shown, never spelled out.
- **Commands are quoted** to teach the voice interface: *"Dim the lights and lock up"*, *"Goodnight"*. Quotes use curly marks with a muted opening quote.
- **No emoji.** Ever. State is carried by colored status dots and pills, not emoji. Iconography is line-based (see below).
- **Vibe.** Cinematic domestic sci-fi — the home as a calm, responsive system. Think the bridge of a very quiet ship, not a gadget store.

---

## VISUAL FOUNDATIONS

**Color.** A dark foundation of layered near-blacks with a cool undertone — `void #05070A` → `abyss #0A0E15` (app bg) → `surface-1/2/3` for cards and wells. Never pure black. One luminous accent, **signal `#4FE3C1`** (aqua-mint), is Cora's identity: it fills the primary action, active devices, focus, and the presence orb. A warm **ember `#FF9E5E`** is the only counterpoint, used for energy/attention. Semantics: online `#56D98C`, warn `#FFC24B`, alert `#FF6B6B`, info `#5EA8FF`. Accents are used *surgically* — most of a screen is neutral; color marks what's live.

**Type.** `Space Grotesk` for all interface and display (geometric, technical, distinctive); `IBM Plex Mono` for every number, timestamp, unit, and status label. Display is tight (`-0.02em`), big, and used for ambient greetings and room titles. Body is `Space Grotesk` 14–16px. There is no serif.

**Spacing & radii.** 4px base grid. Radii are soft but never pillowy: cards at `lg (20px)`, tiles at `md (14px)`, controls at `sm (10px)`, pills fully round. Nothing is sharp-cornered.

**Backgrounds.** The signature field is `--field-radial` — a subtle radial from a faintly-lit top (`#101a26`) down into the void. No photographic backgrounds, no busy patterns. Occasional faint scanline texture on camera feeds only. No gradients on text or buttons (the signal fill is flat).

**Elevation & shadow.** On dark, depth is **glow + hairline + top-light**, not drop shadow. Panels carry a 1px `--border-subtle` hairline, an inset top-light (`--edge-light`), and a soft `--shadow-card`. Active/attention panels add `--glow-signal-soft`. Popovers use `--shadow-pop`. Alarm states glow alert-red.

**Borders.** Hairlines everywhere: `--border-subtle #243040` at rest, `--border-strong #34435A` for emphasis, and `--accent-border` (signal at 38%) on active/focused elements.

**Transparency & blur.** Used deliberately: chrome (sidebar, tab bar) sits on `rgba(8,12,20,0.6–0.82)` with `backdrop-filter: blur`. The voice overlay is a blurred scrim over the live screen. Content surfaces are opaque.

**Motion.** Calm and precise — confident `--ease-out` (cubic-bezier(0.16,1,0.3,1)), 120–420ms. **No bounce.** Toggles glide, panels fade, the accent glows in. The one continuous motion is Cora's presence: a slow 4.2s breathe on the orb, a lazy ring orbit, and voice bars while listening. Reduced-motion should hold the end state.

**Hover / press.** Hover lifts color toward brighter (signal → signal-bright) or fills a faint tint; it never darkens. Press settles to `signal-dim` and does not shrink. Selected nav/tab items fill with `--accent-fill` and grow a signal dot.

**Cards & tiles.** The `Panel` (rounded, hairline, top-light) is the base surface. The `DeviceTile` is the workhorse: neutral when off, and when **on** it tints with `--accent-fill`, lifts its border to signal, glows softly, and its icon chip fills with signal. State is unmistakable at a glance across a wall-sized screen.

**Imagery vibe.** Cool, dark, low-key. Camera feeds are desaturated blue-grey with a faint scanline and a red REC dot. There is no warm/lifestyle photography in-product.

---

## ICONOGRAPHY

Cora uses **Lucide** (https://lucide.dev) — thin, rounded, consistent 1.5–2px stroke line icons — loaded from CDN (`https://unpkg.com/lucide@latest`). The thin monoline weight matches Cora's precise, ambient character; icons inherit `currentColor` so they take signal when active and muted grey at rest. Typical sizes: 16–22px in UI, ~20px in device-tile chips.

- **No emoji** and **no unicode-glyph icons** anywhere.
- The **Cora mark** is not an icon but a rendered orb — a breathing aqua core with an orbiting ring (see the `Orb` component and the "Presence orb" brand card). It stands in for a logo across both surfaces (sidebar mark, phone Cora tab, greeting bar).
- Status is shown with a **filled glowing dot** + label (`StatusPill`), not an icon.

> Substitution note: Lucide is loaded from CDN rather than vendored into `assets/`. If you need an offline/self-hosted build, download the Lucide sprite into `assets/` and swap the CDN `<script>` — the glyph names are unchanged.

---

## INDEX — what's in this system

**Foundations (root)**
- `styles.css` — the single entry point consumers link. Imports-only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css` (106 tokens).

**Components** — `components/core/` — `window.CoraDesignSystem_96922a`
- `Button`, `IconButton`, `Switch`, `Slider`, `Input`, `Tabs` — controls & actions
- `Panel`, `DeviceTile`, `StatusPill`, `Metric` — surfaces & telemetry
- `Orb` — Cora's signature presence (idle / listening / thinking)
- Each has `.jsx` + `.d.ts` + `.prompt.md`; states shown on the Design System tab cards.

**UI kits**
- `ui_kits/command/` — the big-screen home hub (Home, Rooms, Security, Energy, voice overlay).
- `ui_kits/phone/` — the phone companion (Home, Rooms, Cora voice, Settings).

**Specimen cards** — `guidelines/*.card.html` — colors, type, spacing, radii, elevation, and the presence orb, all rendered from live tokens.

**Meta** — `SKILL.md` (portable skill manifest). `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are generated automatically — do not edit.

---

*Fonts are the intended typefaces (Space Grotesk, IBM Plex Mono) loaded from Google Fonts, not substitutions.*

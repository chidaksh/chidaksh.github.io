# Portfolio TODO

**Updated:** 2026-08-03 · **Live:** https://chidaksh.github.io/ · **Repo:** `chidaksh/chidaksh.github.io`
**Stack:** Vite + React + Tailwind, single-page (`src/App.jsx`)

> Local work is committed on `main` but **not yet pushed**. Nothing below has shipped.

---

## Correction to the previous audit

The earlier version of this file claimed the live site served "the old light-blue theme"
and that an entire redesign was unshipped. That was only half right.

Decompiling `origin/master`'s bundle (verified byte-identical to the deployed CSS) showed the
live site **already had the current content** — same nav order, same Contact section, same
UNMASK card, same project set. The only unshipped difference was the **skin**.

The real risk was different: the light-theme source with current content existed **nowhere in
git**. `origin/master` holds built output only (no `src/`), and `HEAD:src/App.jsx` was an older
content generation. The deployed design had no source until commit `7d101e7`.

---

## Done (committed, not pushed)

- [x] Preserved the dark-emerald redesign in history (`ff0ba40`) before moving off it.
- [x] Restored the light-blue theme as real source, matching the production palette
      class-for-class. Kept the mono-font accents, hero dot-grid, and card hover-lift.
- [x] **UNMASK is accepted at COLM 2026** — was still listed as "Under Review" in two places.
      Retitled to *Discovering and Causally Verifying Spurious Shortcuts in Classifiers*.
- [x] **UNMASK metrics corrected** to 81% causal reliance reduction / +12.7pp HANS / 1.2pp
      in-distribution drop. The 60% / +4.6pp / +9.2pp figures were superseded in April;
      only the `Adobe/*` resumes still carry them.
- [x] Added AI Engineer @ **Excipy LLC** (Jun 2026 – Present).
- [x] Added the 2026 project cluster: gallium, Unlearning Robustness, SAE hierarchy
      (EleutherAI SOAR), Agent Post-Training via DPO.
- [x] Added EleutherAI SOAR and BlueDot Impact awards; added COLM to the reviewer list.
- [x] Ended MS, GRA, and the TA role at May 2026; removed all past-dated availability copy.
- [x] Refreshed Core Interests and Technical Stack.
- [x] Removed the unsupported ISRO investment claim (zero support across the resume corpus).
- [x] Removed the dead `nl2pql.streamlit.app` demo link (confirmed redirect loop).
- [x] SEO: retitled, rewrote description/keywords, added canonical + JSON-LD `Person`.
- [x] Real 1200×630 Open Graph card (`public/og-card.jpg`, 74KB).
- [x] Replaced the default vite.svg favicon with a blue "C" monogram.
- [x] `profile.jpg` (248KB) → `profile.webp` (65KB), de-duplicated to one archival original.
- [x] Accessibility: `aria-label` on every icon-only link, `rel="noopener noreferrer"` on all
      external links, `aria-expanded` on the mobile menu toggle.
- [x] GitHub Actions workflow builds `main` → Pages; added `.nojekyll`; dropped the stale
      committed `assets/` bundle.
- [x] Switched `origin` to SSH.

---

## Remaining

### 1. Deploy (needs your call)

- [ ] **Push `main`.** `origin/main` is gone, so it needs `git push -u origin main`.
- [ ] **Switch Pages to "GitHub Actions" source** in repo Settings → Pages. It currently
      deploys from the `master` branch. The workflow will not publish until this is changed.
- [ ] **Decide what happens to `origin/master`.** It holds only built output and was
      force-pushed. Once Actions deploys, it is dead weight — delete or archive it.

### 2. Regenerate the public CV PDF

`public/Chidaksh_Ravuru_CV.pdf` is dated 2026-04-16 and predates Excipy, SOAR, BlueDot, and
every 2026 project. **The source the old TODO named (`latex_files/template.tex`) is itself
stale** — April 17, no Excipy/SOAR/gallium/COLM.

Current full CVs that do have everything:
- `latex_files/ReflectionAI/ReflectionAI_CV.tex` — builds cleanly with **xelatex** (verified).
- `latex_files/AIXILabs/AIXILabs_CV.tex` — newest, but currently fails with a
  `hyperref` option clash under pdflatex.

- [ ] Pick a source (or fold one back into a clean generic `template.tex`) and rebuild.
      Both are company-tailored, so check the framing before publishing it publicly.

### 3. Optional polish

- [ ] **Replace the profile photo.** It is a casual nighttime shot with a snowman. It reads
      oddly next to COLM/KDD publications. The OG card crops to head-and-shoulders to work
      around this, but a plain headshot would serve better.
- [ ] **`animate-blob` is undefined** — in production too, so the hero blobs have always been
      static. Left alone deliberately to preserve the look you have. Add keyframes (with a
      `prefers-reduced-motion` guard) only if you want them drifting.
- [ ] **IIT Delhi RA entry** is kept per your call, but note the CV comments it out and
      records it as *"Winter 2024, Computer Vision Research Intern"* — a different title and
      date range than the site's "Jan 2024 – May 2024, Research Assistant". Worth reconciling.

# PawTint World — Art Direction Brief
Version: 1.0 (concept lock candidate)
Status: Mascot concept sheet generated; owner approval pending. Not yet production-approved.

## Product and visual intent
PawTint World is an interactive discovery world for cat and dog lovers. Art direction combines the project's Field Atlas / naturalist-journal identity with warm, expressive 2.5D cartoon characters. The world should feel like a little illustrated adventure archive—not a generic pet-store template.

## Technical frame
- Runtime: static HTML/CSS/JavaScript website; no game engine.
- Rendering: 2.5D character illustration, soft dimensional shading, sculpted forms and gentle contact shadows.
- Existing world art: `assets/pawtint-adventure-world.svg` (1200×820 viewBox; puppy + cat scene).
- New mascot concept sheet: 1536×1024 source render; JPEG review copy; opaque background. It is a visual reference only, not a transparent sprite atlas.
- Target contexts: responsive web hero art, activity/game panels, character introductions, small in-page illustrations.
- Keep interface text, labels and controls as HTML/CSS—not baked into generated artwork.
- No engine import settings, sprite pivots, collision geometry or animation frames apply until a real interactive sprite pipeline is chosen.

## Character canon
### بودى — the explorer
- Species/role: puppy; lead explorer and adventure starter.
- Silhouette: rounded golden puppy, floppy ears, fluffy tail, compact sturdy body; large readable eyes and muzzle.
- Costume anchors: blue explorer cap with goggles, blue scarf, compact field backpack/vest, compass medallion.
- Personality: brave, warm, curious, encouraging.
- Shape language: rounded, stable, welcoming; clear silhouette at small sizes.
- Palette roles: honey-gold fur, cream muzzle/paws, deep explorer blue, brass/ochre hardware.

### لولى — the puzzle-solver
- Species/role: cat; playful intelligence, riddles and puzzles.
- Silhouette: white/lilac cat, upright pointed ears, large eyes, curled fluffy tail.
- Costume anchors: pink bow, coral scarf, purple field vest, puzzle-piece pendant.
- Personality: clever, playful, observant, mischievous but kind.
- Shape language: elegant pointed ears balanced by soft cheeks and rounded paws.
- Palette roles: ivory/white fur, lilac markings, violet clothing, coral/pink accents.

### بيردى — the guide
- Species/role: bird; guide, hint-giver and mission navigator.
- Silhouette: small round turquoise-and-yellow bird, expressive wings, orange beak and feet.
- Costume anchors: aviator goggles and green leaf-emblem satchel.
- Personality: upbeat, helpful, quick, reassuring.
- Shape language: compact round body, wing gestures readable as simple poses.
- Palette roles: turquoise/cyan feathers, warm yellow chest, orange beak/feet, leaf green satchel.

## Shared visual rules
- All three share the same 2.5D finish, soft key light from upper-left, gentle contact shadow, smooth but tactile surface detail and consistent eye language.
- Preserve character-specific silhouettes, face proportions, signature costume items and palette roles across every future pose.
- Avoid photorealism, flat emoji styling, pixel-art conversion, hard black outlines, overly glossy plastic, tiny noisy details and generic stock-pet imagery.
- Use warm cream/paper environments with Field Atlas accents: ink navy, field green, coral and ochre. Character art can be more saturated than the surrounding editorial interface.
- Keep faces and signature props legible at thumbnail scale. Avoid cropping ears, wings, paws or tails in full-body references.
- Do not put Arabic/English words, logos, watermarks or UI mockups inside generated art.

## Production workflow and approval gates
1. Treat the generated mascot sheet as concept target v1, not final production art.
2. Owner reviews identity, costumes, palette and personality. Record requested changes before producing scene variants.
3. After approval, create separate character assets and expression/pose families from the approved seed; do not infer consistent isolated transparent sprites from this single composite sheet.
4. For web use, normalize/crop each asset to its own file, verify true alpha if transparency is required, inspect edge halos and test against both light and dark backgrounds.
5. Validate in actual page context at desktop and mobile sizes. Do not mark production-ready until asset QA and browser/context checks pass.

## Current decision
The first visual direction uses:
- بودى: golden puppy explorer in blue field gear.
- لولى: ivory/lilac puzzle cat with pink bow and purple gear.
- بيردى: turquoise/yellow guide bird with goggles and green satchel.

This is a proposed visual lock for owner review. Existing site pages and live domain have not been changed by this art-direction document.

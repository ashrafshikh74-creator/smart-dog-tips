# PawTint World — Character Art Direction v1

## Production target
A consistent, original 2.5D storybook mascot family for a static HTML/CSS/JS website. The mascots must read clearly at 72–190 CSS px, work on light and illustrated backgrounds, and retain their identity across pages and future poses. Keep all text, labels and interactions as live HTML, not baked into images.

## Shared visual rules
- Camera: front-facing, slight three-quarter volume; centered full-body bust/character, never cropped ears, wings, tail or feet.
- Form: rounded, readable silhouettes; soft dimensional shading, clean edge contours, restrained highlights and contact shadow.
- Lighting: warm upper-left key light, soft lower-right fill; consistent across the family.
- Palette: warm cream and parchment base, indigo/teal support, coral and golden-yellow accents. Each character has one dominant identity color.
- Detail density: low-to-medium; face and signature accessory must remain readable at small sizes.
- Background: transparent for character masters; no text, logo, watermark, checkerboard or scene baked into character art.
- Motion: buoyant, small-amplitude idle; brief anticipation before reactions; no constant high-frequency movement. Respect prefers-reduced-motion.
- Accessibility: meaningful alt text when character conveys information; empty alt when decorative beside equivalent live text.

## Character canon
### بودى / Bodi — explorer puppy
- Golden/caramel puppy, floppy ears, cream muzzle and chest, large warm brown eyes.
- Signature: blue explorer cap, blue neckerchief, small gold compass.
- Personality: brave, friendly, curious, encouraging.
- Role: leads discovery, outdoor activity and positive reinforcement missions.
- Expression set to produce: idle-friendly, curious (raised brows/head tilt), excited (open smile), calm (soft eyes).
- Pose set: standing explorer, pointing/sniffing clue, celebratory hop, resting.

### لولى / Loli — puzzle cat
- Ivory/white cat with soft lilac shading, upright ears, lavender eyes, pink bow.
- Signature: purple vest and gold puzzle pendant.
- Personality: clever, playful, observant, gently mischievous.
- Role: puzzles, observation, cat behavior and quiz activities.
- Expression set: clever-smile, curious (head tilt), surprised, focused.
- Pose set: seated with paw raised, peeking, solving a puzzle, curled/resting.

### بيردى / Birdy — guide bird
- Small turquoise/sky-blue bird, warm yellow chest and beak, bright eyes.
- Signature: aviator goggles, green scarf and tiny guide satchel.
- Personality: supportive, upbeat, calm and clear.
- Role: contextual hints, onboarding and safety reminders.
- Expression set: welcoming, thinking, encouraging, attentive.
- Pose set: hovering, perched, pointing with wing, carrying a tiny note.

## Existing implementation status
- `bodi.svg`, `loli.svg`, `birdy.svg` are lightweight project-authored vector web illustrations.
- They establish a first-pass shape/palette direction; they are not final high-detail production masters.
- Integrated in homepage cast, character creator, personalized pet home and play-room guide.
- CSS idle motion and contextual walk/hop reactions are implemented on the creator, pet-home and play pages; Birdy also has SVG wing motion. All non-essential motion has `prefers-reduced-motion` fallbacks.
- Interaction mapping: creator choices trigger a short walk reaction; card creation triggers a hop; the garden mission triggers a paired pet/Birdy hop; play choices and missions trigger a Birdy hop.
- These are restrained transforms of the existing SVG/image artwork, not frame-by-frame skeletal walk cycles. True articulated walk/run cycles and alternate expression/pose artwork remain future production work.
- Browser checks passed on the three core interaction pages at 390 px and 1920 px widths (no horizontal overflow); character images loaded and contextual motion classes were triggered. JavaScript syntax checks passed. Full visual review of animation quality and all game paths remains pending.
- Next art-production step: create approved high-detail transparent master for each character, then derive the expression/pose family from that master. Do not independently regenerate each pose from text alone.

## Acceptance gates before release
1. Compare all three characters side by side at 96 px and 180 px.
2. Check silhouette, face, costume and palette consistency.
3. Inspect transparency over cream, teal and dark indigo.
4. Check all extremities remain inside frame; no halos or fake transparency.
5. Check SVG validity and raster exports at target sizes.
6. Inspect on mobile and desktop in the actual site.
7. Verify reduced-motion preference stops non-essential animation.
8. Record source, generation/edit history, license/provenance and approval status in asset manifest.

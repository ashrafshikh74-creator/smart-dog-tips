# PawTint World — Official Character Bible v1

Status: Reference-aligned implementation in progress
Source of truth: owner-supplied PawTint World visual references shared on 2026-11-26.
Use: preserve character identity across the homepage, character studio, pet home, game room and future scenes.

## Shared visual direction
- 2.5D cinematic storybook cartoon; sculpted soft forms, tactile fur/feather detail and gentle contact shadows.
- Warm upper-left key light, expressive large eyes and rounded, friendly proportions.
- Saturated character art against a playful fantasy-world environment.
- Website UI palette: rich violet/purple, pink, warm gold, cream and small teal/green accents.
- Keep interface copy, labels, controls and logos as live HTML/CSS. Do not bake text or UI into character images.
- Preserve each character's silhouette, face proportions, signature clothing and accessories. Do not substitute unrelated mascots or redraw the official PawTint logo.

## Bodi / بودي — explorer puppy
- Species and role: golden puppy; lead explorer and adventure starter.
- Silhouette: compact sturdy body, floppy ears, fluffy tail, cream muzzle and paws.
- Signature costume: blue explorer cap with bronze aviator goggles, blue scarf, field backpack, tan explorer vest/straps and compass medallion.
- Personality: brave, curious, warm and encouraging.
- Palette: fur #F9A43B; cream #F7D7B0; explorer blue #246DB5; sky accent #7FD3FF; leather brown #6B3E2C.

## Loli / لولي — puzzle-solving cat
- Species and role: ivory/lilac cat; puzzles, riddles and playful observation.
- Silhouette: upright pointed ears, soft cheeks, large expressive eyes and a curled fluffy tail.
- Signature costume: pink bow, coral scarf, purple field outfit and puzzle-piece pendant.
- Personality: clever, playful, observant and kind.
- Palette: pink #FF6BA7; pale lilac #E7C7FF; violet #8E4CDB; ivory #FFFFFF; deep purple #6B3A8C.

## Birdy / بيردي — guide bird
- Species and role: small turquoise/yellow bird; hints, guidance and mission navigation.
- Silhouette: round compact body, expressive wings, orange beak and feet.
- Signature costume: aviator goggles, green scarf and green satchel with leaf/paw motif.
- Personality: upbeat, helpful, quick and reassuring.
- Palette: turquoise #2CC7FF; yellow #FFD94D; green #5AC66B; white #FFFFFF; deep blue #3A6B9E.

## Asset and implementation rules
- Keep the existing SVG files as lightweight web fallbacks until isolated, high-detail character masters have passed visual and alpha QA.
- Never crop a composite character sheet and label it a transparent production sprite.
- High-detail masters must be separate per-character files with verified alpha, clean edges, full silhouette, and consistent scale.
- Expression and pose variants must match the canon above; do not create random costume or color changes.
- Test every asset on light, dark and illustrated backgrounds at desktop and mobile sizes.
- Respect prefers-reduced-motion; motion must not be required to understand a character or complete an action.

## Current implementation status
- Shared visual identity stylesheet is linked on the homepage, character studio, pet home and game room.
- Existing SVG mascots remain the currently integrated web fallbacks.
- High-detail isolated Bodi/Birdy reference files are available in the working session but have not yet been committed to the website repository.
- Loli's isolated high-detail master is still pending; do not claim the full production character library is complete.
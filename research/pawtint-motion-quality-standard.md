# PawTint Motion Quality Standard — Realistic, Controlled Motion

Branch: `pawtint-phase1-affiliate-id`

## Goal
Motion should read as hand-authored character animation with believable physical behavior—not random, noisy, or "AI-generated" movement. Keep the existing character designs stable.

## Principles
1. **One motion at a time:** avoid stacking idle, walk, hop, reaction, and SVG sub-animations on the same transform. Separate transform layers (root/body, head, ears, tail/wings) or use a single coordinated state.
2. **Physical cause and effect:** anticipation precedes a jump; feet/contact imply weight; takeoff accelerates; landing compresses, then settles. No instant teleporting or continuous floating.
3. **Stable timing:** use deliberate cycles and state-specific durations. Avoid random per-frame offsets or jitter. Variation is occasional and bounded, never perpetual noise.
4. **Natural easing:** use ease-in for acceleration, ease-out for deceleration, and a short damped settle after impact. Avoid linear motion for organic actions except intentional mechanical movement.
5. **Small secondary motion:** ears, tail, and wings lag the body slightly (overlapping action), but remain subtle and anatomically plausible. They should not move independently without a cause.
6. **Preserve silhouette and identity:** no stretching that distorts face, eye spacing, markings, accessories, or character proportions. Squash/stretch is very limited and only around impact.
7. **State machine, not animation pile:** define Idle, React, Walk, Anticipate, Jump, Land, and Return-to-Idle; transitions must cancel or finish the prior state predictably.
8. **No unnecessary loops:** idle motion should be slow and low amplitude. Reactions are event-triggered and short; they should not replay on every render or every mouse event.
9. **Accessibility:** honor `prefers-reduced-motion`; replace large movement with a static pose or subtle opacity/scale cue. Controls must not depend on motion to communicate state.
10. **QA before merge:** test mobile and desktop, rapid repeated triggers, switching states mid-animation, asset loading, reduced-motion, and no horizontal overflow.

## Suggested motion envelope
- Idle: barely perceptible breathing/bob, 3–5 seconds per cycle; no constant full-body bouncing.
- React: one small, event-driven movement; roughly 250–500 ms.
- Anticipation: 100–180 ms, proportional to the action.
- Takeoff: 120–220 ms.
- Airborne: brief, readable arc; avoid hovering.
- Landing: 100–180 ms compression followed by 180–350 ms settle.
- Secondary appendages: slight delayed follow-through; avoid exaggerated wag/flap loops.

These are starting ranges, not rigid rules; adjust to the pose and visual review.

## Implementation rules
- Prefer dedicated nested SVG groups or wrapper elements for independently moving parts.
- Do not animate the same CSS transform property from multiple classes/keyframes.
- Use animation names scoped to PawTint and explicit cleanup/transition handling.
- Keep CSS/SVG animations declarative where possible; JS should trigger state changes, not drive frame-by-frame motion.
- Never add a "random wobble" to make motion look alive.

## Current limitations
The current mascots are single illustrations with CSS/SVG treatments. These can support subtle idle and secondary motion, but realistic walking/jumping requires approved multi-pose artwork or a rig. Do not disguise this limitation with more aggressive transforms.

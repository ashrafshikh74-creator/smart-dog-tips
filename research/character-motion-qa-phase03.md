# PawTint Character Motion QA — Phase 03

Branch: `pawtint-phase1-affiliate-id`

## Motion implemented
- Bodi: gentle idle bob, subtle ear reactions, contextual walk/hop classes.
- Loli: idle bob, tail sway, occasional ear movement, contextual walk/hop classes.
- Birdy: wing flap in SVG, body idle motion, contextual guide hop.
- Contextual CSS motion is triggered in character studio, pet home, and play room.
- Reduced-motion media rules disable decorative SVG/CSS motion and contextual motion classes.

## Browser QA (390px viewport)
- `world.html`: character image loads; trait choice triggers `pawtint-walk`; card action triggers `pawtint-hop`; card status updates; document width 375px vs viewport 390px.
- `pet-home.html`: Bodi and Birdy character images load; garden task triggers hop on both; document width 375px vs viewport 390px.
- `play.html`: quiz answer updates result and Birdy tip; guide triggers `pawtint-hop`; mission button produces a mission; document width 375px vs viewport 390px.
- Reduced-motion rules are present in CSS/SVG source. A full browser emulation of reduced-motion was not completed in this pass.

## Limits / next gate
These are CSS/SVG motion treatments, not a frame-by-frame rig or sprite animation. The current character drawings remain first-pass assets. Before calling character animation production-ready, create approved master pose sheets and verify walk/jump cycles visually across several frames, then replace/augment the CSS motion with consistent pose animation. No live deployment or DNS changes were made.


## Phase 04 — Motion Lab
- Added a standalone interactive QA page: `research/pawtint-motion-lab-phase04.html`.
- It provides Idle, Walk, Hop, and React previews for Bodi, Loli, and Birdy, plus a manual reduced-motion toggle.
- This is a QA harness for the current whole-illustration motion language, not a frame-by-frame character rig.
- Browser verification was attempted through the preview host, but the host displayed an external-content gate before rendering the page. The lab is committed; runtime interaction checks remain pending a direct preview/browser route.
- Next production gate remains master pose approval and limb-art capable walk/jump cycles.


## Phase 05 — Master Pose Review Board
- Added `research/pawtint-master-pose-board-phase05.html` with five pose beats for Bodi, Loli, and Birdy: idle, anticipation, takeoff, airborne, landing.
- This is a review/continuity board using current illustrations and CSS transforms only. It does not claim new frame artwork or a true rigged animation.
- Review targets: silhouette consistency, accessories/face continuity, anticipation depth, airborne spacing, landing squash/settle.
- Production walk/jump cycles remain gated on approved separate pose artwork or a rig.


## Phase 06 — Secondary Motion
- Loli: added a restrained tail-wag loop with reduced-motion override.
- Birdy: added synchronized, subtle wing rhythm with reduced-motion override.
- Bodi: added occasional ear twitch with reduced-motion override.
- These motions are SVG CSS animation on existing shapes; they are not new artwork or a limb-based walk cycle. Browser QA remains pending because preview access is gated.


## Phase 07 — Natural Motion Refinement
- Reduced locomotion amplitude on `world.html`, `pet-home.html`, and `play.html`: walk is now a subtle weight-shift cue rather than a side-to-side shake; hop height and squash/stretch are reduced.
- Slowed and softened action timing with more controlled easing.
- Reduced pet-home idle bob and Birdy hover amplitude.
- Phase 06 SVG secondary motion was also softened: Bodi ear twitch, Loli tail sway, and Birdy wing movement are slower and less prominent.
- Reduced-motion overrides remain in place.
- Source-level checks only in this pass; browser runtime/visual QA is still pending because the preview host previously blocked the pages with an external-content gate.
- Next: consolidate duplicate event listeners into one motion controller and create/approve separate poses for believable walk and jump cycles.

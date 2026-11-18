# PawTint World — installed skill selection and guardrails

These skills are approved helpers, not independent design authorities. Apply only when relevant to a task.

## Priority
1. PawTint's approved brand and Field Atlas direction.
2. The approved 2.5D character canon: بودى، لولى، بيردى. Preserve their silhouettes, faces, palette, outfits and personality.
3. Existing static HTML/CSS/JavaScript architecture, Arabic/English support, local-first interactions, privacy, and free-first product constraints.
4. Recommendations from installed skills, adapted to the project.

## Installed helpers
- create-game-assets: art direction, asset manifests, consistency, asset QA and licensing. Adapt all pixel-art/engine-specific examples to PawTint's 2.5D web artwork.
- game-ui-ux: browser mini-game screens, responsive layouts, safe areas, focus, interaction flows. Ignore engine-specific instructions that do not apply to plain HTML/JS.
- accessibility: WCAG 2.2-oriented audit and remediation for navigation, controls, contrast, keyboard and assistive technology.
- core-web-vitals: measure and improve LCP, INP and CLS. Never claim field improvement from source inspection alone.

## Project-specific restrictions
- Never replace approved original 2.5D art with stock photography.
- Never change character names, design, colors, silhouette or visual canon without explicit approval.
- Do not migrate frameworks or add build systems, libraries, analytics, tracking, backend services, paid APIs, ads, subscriptions or data collection merely to satisfy a skill.
- Preserve bilingual behavior and current site functionality; test before and after modifications.
- Do not apply engine-specific steps (Godot/Unity/Unreal) to this static website.
- Do not claim an audit passed unless the actual check was run and evidence was observed.
- Never publish to the live domain or change DNS without separate explicit approval.

## Provenance and licenses
- create-game-assets and game-ui-ux: Apache-2.0 upstream repository license; retain attribution/license notice when redistributing substantial copied portions.
- accessibility and core-web-vitals: MIT upstream repository license; retain copyright and permission notice when redistributing substantial copied portions.
- Full source skill text is stored locally in this repository. Check upstream revisions before major future reuse.

## Use
Read only the relevant skill before a task. Use create-game-assets for the mascot/scene library, game-ui-ux for mini-games, accessibility for usability audits, and core-web-vitals for measured performance work.

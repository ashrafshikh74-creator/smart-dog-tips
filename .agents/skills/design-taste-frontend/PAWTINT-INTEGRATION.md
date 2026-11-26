# PawTint World — Taste Skill integration rules

Taste Skill is an optional helper for frontend design and quality review. It is not the governing brand system.

## Priority order
1. PawTint World approved identity and visual direction.
2. PawTint character canon: بودى، لولى، بيردى; consistent 2.5D art direction.
3. Existing project behavior, accessibility, bilingual Arabic/English support, and free-first product constraints.
4. Taste Skill recommendations where they improve the result without conflicting with the above.

## Allowed uses
- Review page structure, hierarchy, responsive behavior, accessibility, motion restraint, performance, and visual consistency.
- Borrow useful planning/checklist practices and adapt them to PawTint.
- Consult upstream reference assets/scripts when a task genuinely needs them.

## Explicit exclusions
- Do not replace PawTint's original 2.5D illustrations with stock photography.
- Do not change the approved characters, their names, silhouettes, colors, outfits, or personality.
- Do not impose Taste Skill's palette restrictions, page-kind assumptions, or visual recipes where they conflict with the approved PawTint art direction.
- Do not introduce shaders, WebGL, heavy animation, paid services, tracking, or external dependencies without a separate need and approval.
- Do not rewrite existing pages wholesale merely to satisfy a generic checklist.
- Never publish to the live site or modify DNS as part of a skill installation or review.

## How to use
Read `SKILL.md` before applying the helper. Its full upstream asset and script library is not vendored in this static-site repository; when a task needs a specific reference or checker, retrieve that exact file from:
https://github.com/Leonxlnx/taste-skill/tree/main/skills/taste-skill

Record the upstream revision used when borrowing a checker or reference. Do not claim a Taste Skill browser gate passed unless the actual upstream checker was installed and run in an environment with its stated prerequisites (Node 22+ and Chrome/Chromium).

## Provenance
- Upstream project: https://github.com/Leonxlnx/taste-skill
- Installed skill definition: `.agents/skills/design-taste-frontend/SKILL.md`
- Source revision at installation: `f6b76575f949707b4e3c37cd86cb44b0b98643e8`

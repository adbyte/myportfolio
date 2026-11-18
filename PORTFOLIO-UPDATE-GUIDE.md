# Portfolio update: project dossiers, editable legacy content and Curiosity Trail

## What's new
- Project cards are keyboard-accessible and open a detail dossier instead of sending visitors directly away.
- The dossier shows the full description, result, tags, uploaded media, GitHub/video/project links and any legacy links.
- Journey milestones continue to open their evidence panel with images, documents and external links.
- The small Curiosity Trail note changes as visitors explore the portrait, selected work and project cards. It is intentionally lightweight, has no third-party AI/API cost, and does not block navigation.
- Existing static projects and milestones can be imported into Supabase so they become editable from `/admin`.

## Important: make existing content editable
1. Back up your Supabase project first.
2. In Supabase SQL Editor, run `portfolio-legacy-content-import.sql` once. It imports the 10 existing project cards and 29 existing Journey milestones as database rows. It is safe to re-run and will not overwrite records that already exist.
3. Ensure `portfolio_projects` and `portfolio_achievements` have the `media` JSONB column. Run `portfolio-content-schema.sql` if you have not already run it.
4. In `/admin`, the imported records appear in Project cards and Journey entries. Choose EDIT to update them.

## Existing rows and duplicate handling
The homepage merges static content with database content. Once the import is run, a matching project slug replaces the static card, and matching Journey entries are de-duplicated by year + title. If you previously created a database record with a different slug/title, review it before importing to avoid visually similar duplicates.

## Media
Uploads use the existing Supabase Storage bucket `portfolio-media`. Public visitors can view uploaded evidence; only the signed-in portfolio admin should upload/delete. Keep the bucket policies from `portfolio-supabase-media-setup.sql` in place.

## Verification checklist
- Sign in to `/admin`.
- Edit EEDO and change its description; save and refresh the homepage.
- Edit the 2018 Technovation milestone, upload a photo/PDF and save.
- Open the EEDO card and the 2018 milestone on the public homepage; verify media and external links.
- Test keyboard access: Tab to a project card and press Enter.
- Test on mobile and with reduced-motion settings.

No external AI API, paid animation library, paid Vercel add-on or paid Supabase feature is required by the Curiosity Trail or detail dossier UI. Supabase storage/egress and Vercel usage remain subject to free-tier quotas.

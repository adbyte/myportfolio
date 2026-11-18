# Aditi Jain Portfolio

Next.js portfolio preserving the approved Modern Technologist design. Content is organised around problem discovery, product thinking, early ventures and current AI systems work.

## Run locally

- Node.js 20+
- `npm install`
- Copy `.env.example` to `.env.local` and fill in Supabase values
- `npm run dev`

## Blog publishing desk

The site includes a private editor at `/admin`. It supports email/password login, categories, drafts, publishing, editing and deletion. Public visitors only see published posts.

1. Create a Supabase project.
2. Run `supabase-schema.sql` in the Supabase SQL Editor.
3. In Supabase Authentication, create one user for the site owner and disable public sign-ups.
4. Copy that user's UUID into the final `insert into public.blog_admins` statement in the SQL file and run it.
5. Add the Project URL and anon/public key to `.env.local` locally and to the hosting provider's environment variables. Never put a service-role key in the browser.
6. Visit `/admin` and sign in with the email/password created in Supabase.

## Deployment

Deploy as a Next.js app on Vercel. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` as environment variables before the first production deployment. Add the custom domain after the deployment is healthy.

## Content and evidence notes

- Two resume PDFs are stored separately in `public/resumes/` for independent updates.
- Early initiatives and achievements are written from the uploaded AICTE gifted-child portfolio. Validate exact dates, names and permissions before publishing sensitive third-party or employer details.
- Moody's project language is intentionally generalised. Confirm public disclosure approval before adding architecture, client data, screenshots or internal workflow specifics.

## Portfolio content manager (projects and achievements)

The private `/admin` area now includes separate forms to add and edit project cards and Journey achievements, including GitHub, video, project, photo/certificate, and press URLs. To enable these two content managers, run `portfolio-content-schema.sql` once in Supabase SQL Editor after the existing blog schema has been installed. Existing hard-coded portfolio entries remain visible until you create database-managed entries; create an entry with the same URL slug to replace its matching static project card on the public site. New achievements are appended to the Journey timeline. Changes are saved in Supabase and appear on the public site without a code deployment.

## Portfolio media uploads (Supabase Free compatible)
Run `portfolio-content-schema.sql` in Supabase SQL Editor after the existing `supabase-schema.sql` has created `blog_admins` and after your admin UUID has been added. This creates/updates the project and achievement tables, adds a public-read `portfolio-media` Storage bucket, and restricts upload/update/delete to authenticated users listed in `blog_admins`.

In `/admin`, edit or create a project/achievement and use the multiple-file upload input to add images, screenshots and PDFs. Files up to 50 MB each are accepted by the client; the bucket policy caps each object at 50 MB. Keep total storage within the Supabase Free 1 GB allowance. The public site reads the saved media metadata and renders images in project cards and timeline evidence panels. Removing a file from the unsaved editor list does not delete an already-uploaded Storage object; remove unused objects in Supabase Storage to reclaim quota.

Existing hard-coded timeline entries remain visible as before. They are not automatically editable records yet: use the Journey entries editor to create database-backed entries. To make every legacy milestone editable, each existing milestone must be imported into `portfolio_achievements` before editing it there.

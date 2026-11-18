-- Run once in Supabase SQL Editor after creating your project.
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  category text not null default 'NOTES',
  content text not null default '',
  cover_image text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

alter table public.blog_posts enable row level security;
alter table public.blog_admins enable row level security;

create policy "Public can read published posts" on public.blog_posts
for select using (published = true);
create policy "Admins can read all posts" on public.blog_posts
for select to authenticated using (exists (select 1 from public.blog_admins where user_id = auth.uid()));
create policy "Admins can insert posts" on public.blog_posts
for insert to authenticated with check (exists (select 1 from public.blog_admins where user_id = auth.uid()));
create policy "Admins can update posts" on public.blog_posts
for update to authenticated using (exists (select 1 from public.blog_admins where user_id = auth.uid())) with check (exists (select 1 from public.blog_admins where user_id = auth.uid()));
create policy "Admins can delete posts" on public.blog_posts
for delete to authenticated using (exists (select 1 from public.blog_admins where user_id = auth.uid()));

-- After creating your login in Supabase Authentication, copy its user UUID here and run:
-- insert into public.blog_admins (user_id) values ('YOUR-AUTH-USER-UUID');
-- Disable public sign-ups in Supabase Authentication settings.

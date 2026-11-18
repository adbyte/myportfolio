-- ADITI JAIN PORTFOLIO: COMPLETE SUPABASE SETUP
-- Run this entire file once in Supabase Dashboard > SQL Editor > New query.
-- It creates the blog, project-card and Journey-achievement tables and their RLS policies.
-- After creating your owner account in Authentication > Users, run the one INSERT at the bottom.

create extension if not exists pgcrypto;

-- 1) BLOG TABLES
create table if not exists public.blog_admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

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

-- 2) PROJECT CARDS
create table if not exists public.portfolio_projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  type text not null default '',
  description text not null default '',
  tags text[] not null default '{}',
  result text not null default '',
  links jsonb not null default '[]'::jsonb,
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 3) JOURNEY / ACHIEVEMENTS
create table if not exists public.portfolio_achievements (
  id uuid primary key default gen_random_uuid(),
  year text not null,
  title text not null,
  body text not null default '',
  kind text not null default '',
  evidence_url text,
  video_url text,
  press_url text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 4) ADMIN CHECK FUNCTION
-- SECURITY DEFINER lets RLS policies check blog_admins without requiring public read access to that table.
create or replace function public.is_blog_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.blog_admins
    where user_id = (select auth.uid())
  );
$$;

revoke all on function public.is_blog_admin() from public;
grant execute on function public.is_blog_admin() to anon, authenticated;

-- 5) ENABLE ROW LEVEL SECURITY
alter table public.blog_admins enable row level security;
alter table public.blog_posts enable row level security;
alter table public.portfolio_projects enable row level security;
alter table public.portfolio_achievements enable row level security;

-- 6) REMOVE OLD POLICIES SO THIS SCRIPT CAN BE SAFELY RE-RUN
drop policy if exists "Public can read published posts" on public.blog_posts;
drop policy if exists "Admins can read all posts" on public.blog_posts;
drop policy if exists "Admins can insert posts" on public.blog_posts;
drop policy if exists "Admins can update posts" on public.blog_posts;
drop policy if exists "Admins can delete posts" on public.blog_posts;
drop policy if exists "Public can read portfolio projects" on public.portfolio_projects;
drop policy if exists "Admins manage portfolio projects" on public.portfolio_projects;
drop policy if exists "Public can read portfolio achievements" on public.portfolio_achievements;
drop policy if exists "Admins manage portfolio achievements" on public.portfolio_achievements;

-- 7) BLOG ACCESS
create policy "Public can read published posts" on public.blog_posts
for select to anon, authenticated using (published = true);
create policy "Admins can read all posts" on public.blog_posts
for select to authenticated using (public.is_blog_admin());
create policy "Admins can insert posts" on public.blog_posts
for insert to authenticated with check (public.is_blog_admin());
create policy "Admins can update posts" on public.blog_posts
for update to authenticated using (public.is_blog_admin()) with check (public.is_blog_admin());
create policy "Admins can delete posts" on public.blog_posts
for delete to authenticated using (public.is_blog_admin());

-- 8) PROJECTS: public website can read; only signed-in portfolio admin can write
create policy "Public can read portfolio projects" on public.portfolio_projects
for select to anon, authenticated using (true);
create policy "Admins manage portfolio projects" on public.portfolio_projects
for all to authenticated using (public.is_blog_admin()) with check (public.is_blog_admin());

-- 9) ACHIEVEMENTS: public website can read; only signed-in portfolio admin can write
create policy "Public can read portfolio achievements" on public.portfolio_achievements
for select to anon, authenticated using (true);
create policy "Admins manage portfolio achievements" on public.portfolio_achievements
for all to authenticated using (public.is_blog_admin()) with check (public.is_blog_admin());

-- 10) TABLE PRIVILEGES (RLS above still controls which rows can be accessed)
grant usage on schema public to anon, authenticated;
grant select on public.blog_posts, public.portfolio_projects, public.portfolio_achievements to anon, authenticated;
grant insert, update, delete on public.blog_posts, public.portfolio_projects, public.portfolio_achievements to authenticated;

-- 11) CREATE YOUR ADMIN LOGIN FIRST:
-- Supabase Dashboard > Authentication > Users > Add user.
-- Copy that user's UUID, then replace the placeholder and run this statement separately:
-- insert into public.blog_admins (user_id) values ('PASTE-AUTH-USER-UUID-HERE') on conflict do nothing;

-- 12) OPTIONAL VERIFICATION AFTER THE ADMIN INSERT:
-- select 'blog_posts' as table_name, count(*) from public.blog_posts
-- union all select 'portfolio_projects', count(*) from public.portfolio_projects
-- union all select 'portfolio_achievements', count(*) from public.portfolio_achievements;

-- Run in Supabase SQL Editor. Safe to re-run.
create table if not exists public.portfolio_projects (
 id uuid primary key default gen_random_uuid(), name text not null, slug text not null unique,
 type text not null default '', description text not null default '', tags text[] not null default '{}',
 result text not null default '', links jsonb not null default '[]'::jsonb, media jsonb not null default '[]'::jsonb,
 featured boolean not null default false, sort_order integer not null default 0,
 created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.portfolio_achievements (
 id uuid primary key default gen_random_uuid(), year text not null, title text not null, body text not null default '',
 kind text not null default '', evidence_url text, video_url text, press_url text,
 media jsonb not null default '[]'::jsonb, sort_order integer not null default 0,
 created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
alter table public.portfolio_projects add column if not exists media jsonb not null default '[]'::jsonb;
alter table public.portfolio_achievements add column if not exists media jsonb not null default '[]'::jsonb;
alter table public.portfolio_projects enable row level security;
alter table public.portfolio_achievements enable row level security;
drop policy if exists "Public can read portfolio projects" on public.portfolio_projects;
drop policy if exists "Admins manage portfolio projects" on public.portfolio_projects;
drop policy if exists "Public can read portfolio achievements" on public.portfolio_achievements;
drop policy if exists "Admins manage portfolio achievements" on public.portfolio_achievements;
create policy "Public can read portfolio projects" on public.portfolio_projects for select using (true);
create policy "Admins manage portfolio projects" on public.portfolio_projects for all to authenticated using (exists(select 1 from public.blog_admins where user_id=auth.uid())) with check (exists(select 1 from public.blog_admins where user_id=auth.uid()));
create policy "Public can read portfolio achievements" on public.portfolio_achievements for select using (true);
create policy "Admins manage portfolio achievements" on public.portfolio_achievements for all to authenticated using (exists(select 1 from public.blog_admins where user_id=auth.uid())) with check (exists(select 1 from public.blog_admins where user_id=auth.uid()));
-- Public read bucket for portfolio evidence. Writes/deletes are admin-only.
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('portfolio-media','portfolio-media',true,52428800,array['image/jpeg','image/png','image/webp','image/gif','application/pdf'])
on conflict (id) do update set public=true,file_size_limit=52428800,allowed_mime_types=excluded.allowed_mime_types;
drop policy if exists "Public can view portfolio media" on storage.objects;
drop policy if exists "Portfolio admins upload media" on storage.objects;
drop policy if exists "Portfolio admins update media" on storage.objects;
drop policy if exists "Portfolio admins delete media" on storage.objects;
create policy "Public can view portfolio media" on storage.objects for select using (bucket_id='portfolio-media');
create policy "Portfolio admins upload media" on storage.objects for insert to authenticated with check (bucket_id='portfolio-media' and exists(select 1 from public.blog_admins where user_id=auth.uid()));
create policy "Portfolio admins update media" on storage.objects for update to authenticated using (bucket_id='portfolio-media' and exists(select 1 from public.blog_admins where user_id=auth.uid())) with check (bucket_id='portfolio-media' and exists(select 1 from public.blog_admins where user_id=auth.uid()));
create policy "Portfolio admins delete media" on storage.objects for delete to authenticated using (bucket_id='portfolio-media' and exists(select 1 from public.blog_admins where user_id=auth.uid()));

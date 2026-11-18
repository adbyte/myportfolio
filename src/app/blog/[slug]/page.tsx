import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
export const dynamic = 'force-dynamic';
export default async function BlogPost({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL, key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if(!url||!key)return <main className="article-page"><Link href="/">← BACK HOME</Link><h1>Writing is being set up.</h1></main>;
  const db=createClient(url,key); const {data}=await db.from('blog_posts').select('title,category,excerpt,content,published_at').eq('slug',slug).eq('published',true).maybeSingle();
  if(!data)return <main className="article-page"><Link href="/">← BACK HOME</Link><h1>Article not found.</h1></main>;
  return <main className="article-page"><Link href="/#writing">← ALL WRITING</Link><p className="eyebrow">{data.category} · {data.published_at?new Date(data.published_at).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'}):'FIELD NOTES'}</p><h1>{data.title}</h1><p className="article-excerpt">{data.excerpt}</p><div className="article-content"><ReactMarkdown>{data.content}</ReactMarkdown></div></main>;
}

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Artist {
  id: string;
  name: string;
  slug: string;
  country: string;
  genre: string;
  time: string;
  image: string;
  bio: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}

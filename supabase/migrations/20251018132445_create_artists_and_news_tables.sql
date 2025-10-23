/*
  # Create Broekrock CMS Tables

  1. New Tables
    - `artists`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Artist/band name
      - `slug` (text, unique) - URL-friendly identifier
      - `country` (text) - Country code (BE, NL, DE, US, etc.)
      - `genre` (text) - Music genre
      - `time` (text) - Performance time (HH:MM format)
      - `image` (text) - Image URL/path
      - `bio` (text) - Short biography
      - `sort_order` (integer) - Manual sorting for display order
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp
    
    - `news`
      - `id` (uuid, primary key) - Unique identifier
      - `title` (text) - News article title
      - `slug` (text, unique) - URL-friendly identifier
      - `content` (text) - Article content
      - `excerpt` (text) - Short summary for previews
      - `image` (text) - Featured image URL/path
      - `published` (boolean) - Publication status
      - `published_at` (timestamptz) - Publication date
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on both tables
    - Public read access for all published content
    - Admin-only write access (implement auth later if needed)
*/

CREATE TABLE IF NOT EXISTS artists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  country text NOT NULL DEFAULT '',
  genre text NOT NULL DEFAULT '',
  time text NOT NULL DEFAULT '',
  image text NOT NULL DEFAULT '',
  bio text NOT NULL DEFAULT '',
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL DEFAULT '',
  excerpt text NOT NULL DEFAULT '',
  image text DEFAULT '',
  published boolean DEFAULT false,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view artists"
  ON artists FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can view published news"
  ON news FOR SELECT
  TO anon
  USING (published = true);

CREATE INDEX IF NOT EXISTS idx_artists_sort_order ON artists(sort_order);
CREATE INDEX IF NOT EXISTS idx_news_published_at ON news(published_at DESC) WHERE published = true;
# Page Views Integration Guide

The blog now includes a page view counter on each blog post. Currently, it uses localStorage as a fallback for development/demo purposes. For production use, you should integrate with a real analytics service.

## Current Implementation

The `ViewCounter` component displays view counts and tracks page views. It:
- Shows the number of views for each blog post
- Prevents duplicate counting within the same session using sessionStorage
- Uses localStorage as a fallback for demo purposes

## Production Integration Options

### Option 1: Supabase (Recommended for Static Sites)

1. **Create a Supabase project** at https://supabase.com

2. **Create a views table:**
```sql
CREATE TABLE page_views (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  views INTEGER DEFAULT 0,
  last_updated TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_slug ON page_views(slug);
```

3. **Create an Edge Function** for tracking views:
```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const { slug, increment } = await req.json()
  
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  )

  if (increment) {
    await supabase.rpc('increment_views', { post_slug: slug })
  }

  const { data } = await supabase
    .from('page_views')
    .select('views')
    .eq('slug', slug)
    .single()

  return new Response(
    JSON.stringify({ views: data?.views || 0 }),
    { headers: { 'Content-Type': 'application/json' } }
  )
})
```

4. **Add environment variable:**
```bash
NEXT_PUBLIC_VIEWS_API_URL=https://your-project.supabase.co/functions/v1
```

### Option 2: Vercel Edge Config + KV

1. **Set up Vercel KV** in your Vercel project dashboard

2. **Create an API endpoint** (`api/views.ts`):
```typescript
import { kv } from '@vercel/kv'

export default async function handler(req: Request) {
  const { slug, increment } = await req.json()
  
  if (increment) {
    await kv.incr(`views:${slug}`)
  }
  
  const views = await kv.get(`views:${slug}`) || 0
  return Response.json({ views })
}

export const config = {
  runtime: 'edge',
}
```

3. **Deploy to Vercel** (API routes will work automatically)

### Option 3: Google Analytics

For a simpler integration without backend management:

1. **Install Google Analytics:**
```bash
npm install react-ga4
```

2. **Track page views** using Google Analytics events
3. **Use Analytics API** to fetch view counts (requires setup)

### Option 4: Firebase

1. **Set up Firebase Realtime Database**
2. **Create a cloud function** to increment views
3. **Configure environment variables**

## Environment Variables

Add this to your `.env.local` file:

```bash
# Optional: External API endpoint for view tracking
NEXT_PUBLIC_VIEWS_API_URL=https://your-api-endpoint.com
```

## Testing Locally

The current implementation uses localStorage for testing. Each blog post view count is stored locally in your browser. To reset counts:

```javascript
// Open browser console and run:
localStorage.clear()
sessionStorage.clear()
```

## Features

- ✅ Session-based duplicate prevention
- ✅ Smooth loading state with animation
- ✅ Accessible with ARIA labels
- ✅ Dark mode support
- ✅ Graceful fallback if API fails
- ✅ Formatted numbers (1,234 views)

## Future Enhancements

- Add trending posts based on view counts
- Display view count on blog list page
- Add view count charts/analytics dashboard
- Track unique visitors vs total views
- Add geographic analytics

import { NextResponse } from 'next/server'

// Supabase setup (you'll need to install @supabase/supabase-js and add env vars)
// For now, this is a placeholder that logs to console
// To implement fully:
// 1. npm install @supabase/supabase-js
// 2. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local
// 3. Uncomment the Supabase code below

// import { createClient } from '@supabase/supabase-js'
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// )

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, location, rating, review, email } = body

    // Validate required fields
    if (!name || !location || !rating || !review) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate rating
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      )
    }

    // TODO: Uncomment when Supabase is set up
    // Create the review record
    // const { data, error } = await supabase
    //   .from('reviews')
    //   .insert([
    //     {
    //       name,
    //       location,
    //       rating,
    //       review,
    //       email,
    //       approved: false, // Reviews need approval before showing on site
    //       created_at: new Date().toISOString(),
    //     },
    //   ])
    //   .select()

    // if (error) {
    //   console.error('Supabase error:', error)
    //   return NextResponse.json(
    //     { error: 'Failed to save review' },
    //     { status: 500 }
    //   )
    // }

    // For now, just log it (TEMPORARY - replace with Supabase)
    console.log('Review submitted:', { name, location, rating, review, email })

    // TODO: Send email notification about new review
    // You could use Resend, SendGrid, or another email service

    return NextResponse.json({
      success: true,
      message: 'Review submitted successfully',
    })
  } catch (error) {
    console.error('Error processing review:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Supabase table schema (run this in Supabase SQL editor):
/*
create table reviews (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  location text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  review text not null,
  email text,
  approved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table reviews enable row level security;

-- Allow anyone to insert reviews (they'll be pending approval)
create policy "Anyone can submit reviews"
  on reviews for insert
  to anon
  with check (true);

-- Only authenticated admin users can view/approve reviews
create policy "Only admins can view reviews"
  on reviews for select
  using (auth.role() = 'authenticated');

create policy "Only admins can update reviews"
  on reviews for update
  using (auth.role() = 'authenticated');
*/

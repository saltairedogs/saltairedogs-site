import { BlogPost, BlogCategory } from './blog'

// Generate 50 placeholder posts with consistent structure
function generatePlaceholders(): BlogPost[] {
  const categories: BlogCategory[] = ['Local Spots', 'Walking', 'Training', 'Safety', 'Puppy', 'Equipment', 'News']
  const imagePool = [
    { src: '/saltaire-victoria-road-schnauzer-on-lead.jpg', alt: 'Schnauzer on lead in Saltaire' },
    { src: '/north-cliffe-dog-rainbow.jpg', alt: 'Dog with rainbow at North Cliffe' },
    { src: '/walking-sat-dog.jpg', alt: 'Walking in Saltaire' },
    { src: '/saltaire-canal-retriever-on-lead-cobbles.jpg', alt: 'Retriever on canal towpath' },
    { src: '/poodle-walking-shipley-glenn.jpg', alt: 'Poodle walking in Shipley Glen' },
    { src: '/saltaire-dog-river.png', alt: 'Dog by Saltaire river' },
    { src: '/choosing-a-harness.jpg', alt: 'Dog harness selection' },
    { src: '/dog-harness-blog-cover.png', alt: 'Dog harness cover' },
  ] as const
  return Array.from({ length: 50 }, (_, i) => {
    const n = i + 1
    const slug = `coming-soon-local-guide-${String(n).padStart(2, '0')}`
    const img = imagePool[i % imagePool.length]
    return {
      slug,
      title: `Coming Soon: Local Guide ${String(n).padStart(2, '0')}`,
      excerpt: 'A new article is on the way. Check back soon for practical, friendly local advice.',
      content: `<p>We\'re preparing a detailed guide packed with local knowledge and calm, practical tips. Save this page and check back soon!</p>`,
      coverImage: { src: img.src, alt: img.alt, width: 1200, height: 800 },
      author: { name: 'Saltaire Dog Walks', avatar: '/logo.svg' },
      datePublished: new Date(Date.UTC(2025, 0, Math.min(28, n))).toISOString(),
      readingTime: 3,
      category: categories[i % categories.length],
      tags: ['coming soon', 'saltaire'],
      stats: { views: 0, likes: 0, helpfulVotes: 0 },
      seo: { metaDescription: 'Coming soon: practical dog walking and care advice for Saltaire, Shipley & Baildon.' },
      featured: false,
    }
  })
}

// Sample blog posts for seeding
export const SAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'perfect-recall-training-guide',
    title: 'The Perfect Recall: Training Your Dog to Come When Called',
    excerpt: 'Master the most important command every dog should know. Our step-by-step guide helps you build bulletproof recall using positive methods that work.',
    content: `# The Perfect Recall: Training Your Dog to Come When Called

Recall is the most important skill your dog can learn. It keeps them safe, gives you peace of mind, and allows for off-lead adventures around beautiful spots like Roberts Park and the canal towpath.

## Why Recall Matters in Saltaire

Living in Saltaire means we're blessed with amazing walking spots—the canal towpath, Roberts Park, and Hirst Wood. But these areas can present distractions: other dogs, cyclists, narrowboats, and wildlife. A solid recall ensures your dog can enjoy freedom while staying safe.

## Building Strong Recall: The SALTAIRE Method

**S** - Start small in your garden or quiet indoor space
**A** - Always reward immediately when they come
**L** - Learn their motivators (treats, toys, praise)
**T** - Time your practice for when they're alert but not overstimulated  
**A** - Add distance gradually as they improve
**I** - Ignore failures—never chase or scold
**R** - Repeat daily in short, positive sessions
**E** - Extend to different locations once reliable

## Common Mistakes to Avoid

Never call your dog to come for something they perceive as negative—like ending playtime or giving medicine. This creates negative associations with the recall command.

## Local Practice Spots

Start recall training in these gradually challenging environments around Saltaire:

1. **Your garden** - Zero distractions
2. **Victoria Road quiet end** - Minimal foot traffic  
3. **Roberts Park early morning** - Few people, controlled environment
4. **Canal towpath by Salts Mill** - More distractions but still manageable
5. **Roberts Park during busy times** - Ultimate test!

> **Safety Note**: Always practice in secure areas or on a long line until recall is 100% reliable. The canal can be dangerous for dogs who don't respond immediately.

Remember, every dog learns at their own pace. Be patient, stay positive, and celebrate small wins. Your local Saltaire Dog Walks team is always here to help if you need guidance!`,
    coverImage: {
      src: '/perfect-recall-image-blog.jpg',
      alt: 'Happy golden retriever running towards owner in Roberts Park with Saltaire in background',
      width: 1200,
      height: 800
    },
    author: {
      name: 'Saltaire Dog Walks',
      avatar: '/logo.svg'
    },
    datePublished: '2024-09-15T10:00:00Z',
    readingTime: 6,
    category: 'Training',
    tags: ['recall', 'training', 'safety', 'Roberts Park', 'canal towpath'],
    location: 'Saltaire',
    stats: {
      views: 1247,
      likes: 89,
      helpfulVotes: 67
    },
    seo: {
      metaDescription: 'Learn to train perfect recall with our proven SALTAIRE method. Step-by-step guide for safe off-lead walks around Saltaire, Shipley & Baildon.',
      ogImage: '/blog/og/recall-training.jpg'
    },
    featured: true
  },

  {
    slug: 'roberts-park-perfect-dog-walk',
    title: 'Roberts Park: The Perfect Dog Walking Route',
    excerpt: 'Discover the best routes, hidden gems, and dog etiquette for Saltaire\'s most beloved park. From quiet morning loops to busy afternoon adventures.',
    content: `# Roberts Park: The Perfect Dog Walking Route

Roberts Park is the crown jewel of Saltaire's dog walking spots. This beautiful Victorian park offers something for every dog—from energetic young pups to gentle senior dogs who prefer leisurely strolls.

## The Classic Loop (20 minutes)

Start at the main entrance near the cricket pavilion. Head left past the playground, keeping dogs on lead near children. The path curves gently around the lake—perfect for dogs who love watching ducks (though swimming isn't allowed!).

Continue past the bandstand and up the gentle hill towards the Roberts Park trees. This section often has squirrels, great for working on impulse control with your dog.

## Early Morning Magic (6:30-8:00 AM)

This is when Roberts Park truly shines for dog walkers. Fewer people means:
- More space for recall training
- Calmer energy for reactive dogs  
- Beautiful morning light for photos
- Frost patterns in winter that dogs love investigating

## Busy Times Strategy (Weekends, After School)

When the park is bustling:
- Stick to the outer perimeter paths
- Keep social dogs on shorter leads near the playground
- Use the quieter upper section near the trees
- Perfect time for socialisation if your dog is friendly

## Seasonal Considerations

**Spring**: Watch for nesting birds—keep dogs on paths
**Summer**: Early mornings essential to avoid heat, bring water
**Autumn**: Fallen leaves create exciting new smells  
**Winter**: Check for ice on paths, especially near the lake

## Dog Etiquette in Roberts Park

- Always clean up—bins are located every 50 meters
- Keep dogs on lead near the playground and café
- Allow space for non-dog walkers to pass comfortably
- If your dog is reactive, early mornings are ideal

## Hidden Gems

The area behind the bandstand has a small wooded section that many miss. It's perfect for dogs who love sniffing and exploring, with interesting textures and smells.

Roberts Park connects beautifully with walks along the canal towpath—you can easily extend your adventure along the water towards Shipley or Bradford.

Remember, this park is shared space. Keeping it enjoyable for everyone ensures it remains a wonderful resource for our Saltaire dog community!`,
    coverImage: {
      src: '/walking-sat-dog.jpg',
      alt: 'Dogs playing in Roberts Park with Victorian bandstand and autumn trees',
      width: 1200,
      height: 800
    },
    author: {
      name: 'Saltaire Dog Walks',
      avatar: '/logo.svg'
    },
    datePublished: '2024-09-20T14:30:00Z',
    readingTime: 5,
    category: 'Local Spots',
    tags: ['Roberts Park', 'walking routes', 'Saltaire', 'park etiquette'],
    location: 'Saltaire',
    stats: {
      views: 892,
      likes: 64,
      helpfulVotes: 48
    },
    seo: {
      metaDescription: 'Complete guide to dog walking in Roberts Park, Saltaire. Best routes, times, etiquette tips and seasonal advice for the perfect park walk.',
      ogImage: '/blog/og/roberts-park.jpg'
    },
    featured: false
  },

  {
    slug: 'puppy-first-walk-checklist',
    title: 'Your Puppy\'s First Walk: Complete Checklist',
    excerpt: 'Everything you need to know before taking your puppy outside. Vaccination timeline, essential gear, and how to make first walks positive experiences.',
    content: `# Your Puppy's First Walk: Complete Checklist

Taking your puppy on their first walk is an exciting milestone! But timing, preparation, and approach are crucial for creating positive experiences that set the foundation for a lifetime of happy walks.

## When Can Puppies Start Walking?

**Before Full Vaccination (8-16 weeks):**
- Carry them to experience sights and sounds
- Let them walk briefly on private, clean surfaces  
- Avoid areas where unvaccinated dogs may have been

**After Full Vaccination (usually 16+ weeks):**
- Can walk on public paths and parks
- Start with short 5-10 minute walks
- Gradually increase duration

> **Vet Advice**: Always confirm with your local vet when it's safe for your specific puppy to walk in public areas around Saltaire.

## Essential First Walk Gear

### Must-Haves
- **Properly fitted collar with ID tag** (check fit weekly as they grow)
- **6-foot standard lead** (not retractable for first walks)
- **High-value treats** (small, soft pieces they can eat quickly)
- **Poop bags** (be a responsible Saltaire resident!)
- **Water bowl** (collapsible travel bowl)

### Optional but Helpful
- **Treat pouch** for easy access
- **Blanket** in case they need a rest
- **Phone** for photos and emergencies

## Pre-Walk Checklist

**The Night Before:**
- [ ] Check weather forecast
- [ ] Plan a short, quiet route
- [ ] Prepare treat pouch
- [ ] Check collar fit and ID tag

**Before Leaving:**
- [ ] Puppy has had toilet break
- [ ] Not right after eating (wait 30 minutes)
- [ ] You have treats, bags, and water
- [ ] Weather appropriate for puppy coat

## Perfect First Walk Routes in Saltaire

### Super Beginner (5 minutes)
**Victoria Road quiet section** - Wide pavement, minimal traffic, gentle introduction to outdoor sounds.

### Building Confidence (10 minutes)  
**Around Salts Mill car park** - Flat surface, some interesting smells, usually calm during weekday mornings.

### Ready for More (15 minutes)
**Edge of Roberts Park** - Stay on paths, avoid busy playground area, lovely grass smells and textures.

## Making It Positive

### Do:
- Let them sniff and explore at their pace
- Reward brave behavior with treats and praise
- Keep sessions short and sweet
- End on a positive note

### Don't:
- Force them to walk if they're scared
- Rush past things they want to investigate
- Walk during extreme weather
- Go too far too fast

## Common First Walk Challenges

**Puppy won't move:** This is normal! Sit down at their level, encourage gently, use treats to motivate forward movement.

**Overwhelmed by sounds:** Start with quieter times (early morning in Saltaire is perfect), gradually introduce busier periods.

**Pulling on lead:** Stop moving when they pull, reward when lead is loose. Start lead training indoors first.

**Scared of other dogs:** Keep distance, use treats to create positive associations, don't force interactions.

## Building Up Gradually

Week 1-2: 5-10 minute walks around immediate neighborhood
Week 3-4: 10-15 minutes, introduce new textures (grass, leaves)  
Week 5-6: 15-20 minutes, visit quieter areas of Roberts Park
Week 7+: Longer adventures as stamina builds

## Local Puppy Classes

Consider puppy socialisation classes in Shipley or Bradford to complement walks. The combination of controlled socialisation and real-world walking experience is ideal.

Remember: every puppy is different. Some bound out confidently, others need more encouragement. Follow your puppy's lead and keep it fun!

Your local Saltaire Dog Walks team loves helping with puppy development—don't hesitate to ask for guidance during this crucial period.`,
    coverImage: {
      src: '/saltaire-dog-river.png',
      alt: 'Adorable puppy with collar and lead sitting on Saltaire street looking excited',
      width: 1200,
      height: 800
    },
    author: {
      name: 'Saltaire Dog Walks',
      avatar: '/logo.svg'
    },
    datePublished: '2024-09-10T09:00:00Z',
    readingTime: 7,
    category: 'Puppy',
    tags: ['puppy', 'first walk', 'vaccination', 'socialisation', 'gear'],
    stats: {
      views: 1567,
      likes: 128,
      helpfulVotes: 95
    },
    seo: {
      metaDescription: 'Complete guide to your puppy\'s first walk. Vaccination timing, essential gear checklist, and perfect first routes around Saltaire.',
      ogImage: '/blog/og/puppy-first-walk.jpg'
    },
    featured: false
  },

  {
    slug: 'summer-heat-safety-dogs',
    title: 'Summer Heat Safety: Protecting Your Dog',
    excerpt: 'Essential heat safety tips for Yorkshire summers. Recognize warning signs, plan cooler walks, and keep your dog comfortable when temperatures rise.',
    content: `# Summer Heat Safety: Protecting Your Dog

Yorkshire summers might seem mild, but even moderate heat can be dangerous for dogs. Their inability to sweat like humans makes them vulnerable to overheating, especially during active walks around Saltaire.

## Understanding Heat Risk

Dogs cool themselves primarily through panting and limited sweating through paw pads. When air temperature approaches their body temperature (around 38°C/100°F), this cooling system becomes ineffective.

**High-Risk Dogs:**
- Flat-faced breeds (pugs, bulldogs, Boston terriers)
- Senior dogs
- Overweight dogs  
- Dogs with thick coats
- Puppies under 6 months
- Dogs with medical conditions

## Temperature Guidelines

**18-22°C (64-72°F)**: Perfect walking weather
**23-26°C (73-78°F)**: Normal walks okay, watch for signs of tiredness
**27-29°C (80-84°F)**: Shorter walks, seek shade, carry water
**30°C+ (86°F+)**: Early morning/late evening only, minimal exercise

## The Pavement Test

Place your hand on the pavement for 7 seconds. If it's too hot for your hand, it's too hot for paw pads. Hot tarmac can reach 50°C+ (120°F+) and cause burns within seconds.

## Ideal Summer Walking Times in Saltaire

**6:00-8:00 AM**: Perfect temperature, fewer people in Roberts Park
**9:00-9:30 PM**: Cooled down but still light enough for safe walking
**Avoid**: 11:00 AM - 5:00 PM during hot days

## Beat the Heat: Local Strategies

### Shady Routes
- **Canal towpath under trees** (near Salts Mill)
- **Roberts Park wooded areas** (behind bandstand)
- **Victoria Road tree-lined sections**

### Water Access
- Roberts Park has water fountains (carry a bowl)
- Canal towpath benches for rest breaks
- Several dog-friendly cafés with outdoor water bowls

### Cooling Techniques
- Wet towel on neck and chest before walks
- Cooling mats for post-walk recovery
- Frozen treats (dog-safe) as rewards
- Paddling pools in gardens

## Warning Signs of Overheating

**Early Signs:**
- Heavy panting
- Drooling excessively  
- Seeking shade
- Slowing down or stopping
- Red or pale gums

**Emergency Signs:**
- Vomiting or diarrhea
- Difficulty breathing
- Confusion or disorientation
- Collapse

> **Emergency Action**: Move to shade immediately, wet with cool (not cold) water, fan them, contact vet urgently. Don't use ice water—it can cause blood vessels to constrict.

## Car Safety

**Never leave dogs in cars** during warm weather—even with windows cracked. Car interiors can reach deadly temperatures within minutes.

**Traveling tips:**
- Use sunshades
- Ensure good ventilation
- Bring water and bowl
- Plan stops every hour

## Grooming for Summer

- Regular brushing removes loose undercoat
- Consider professional grooming for thick-coated dogs
- Don't shave completely—coat provides insulation
- Keep nails trimmed (long nails make walking on hot surfaces worse)

## Home Cooling Setup

Create cool zones at home:
- Tile or concrete floors in shade
- Raised beds for air circulation
- Paddling pools for paws
- Frozen stuffed toys for entertainment

## Local Emergency Contacts

Keep these numbers handy during hot weather:
- **Emergency Vet**: 24-hour animal hospital Bradford
- **Your Regular Vet**: [Insert local practice]
- **Saltaire Dog Walks**: For advice and alternative care options

## Making Smart Choices

It's better to skip a walk than risk heat stroke. Dogs don't understand they need to slow down—that's our responsibility as their guardians.

Consider mental enrichment on very hot days:
- Puzzle feeders
- Training sessions indoors
- Frozen treat games
- Sniff work in cool areas

Remember: a tired dog from mental stimulation is just as satisfied as one tired from physical exercise, and much safer on hot Yorkshire summer days!

Your Saltaire Dog Walks team always prioritizes safety over exercise—we'll never walk dogs in dangerous heat conditions.`,
    coverImage: {
      src: '/saltaire-victoria-road-schnauzer-on-lead.jpg',
      alt: 'Dog drinking water from bowl in shade on hot summer day with thermometer showing high temperature',
      width: 1200,
      height: 800
    },
    author: {
      name: 'Saltaire Dog Walks',
      avatar: '/logo.svg'
    },
    datePublished: '2024-07-15T11:00:00Z',
    readingTime: 8,
    category: 'Safety',
    tags: ['heat safety', 'summer', 'emergency', 'temperature', 'paw protection'],
    stats: {
      views: 2134,
      likes: 167,
      helpfulVotes: 142
    },
    seo: {
      metaDescription: 'Essential summer heat safety guide for dogs. Temperature guidelines, warning signs, and cooling strategies for safe Yorkshire summer walks.',
      ogImage: '/blog/og/summer-heat-safety.jpg'
    },
    featured: false
  },

  {
    slug: 'choosing-right-dog-harness',
    title: 'Choosing the Right Dog Harness: Complete Guide',
    excerpt: 'Find the perfect harness for your dog\'s needs. Compare styles, fit guides, and recommendations for different walking situations around Saltaire.',
    content: `# Choosing the Right Dog Harness: Complete Guide

A well-fitted harness can transform your walks around Saltaire. Whether you're navigating the busy canal towpath or enjoying a leisurely stroll through Roberts Park, the right harness provides comfort, control, and safety for both you and your dog.

## Why Harnesses Over Collars?

### Benefits:
- **Reduced neck strain** - Especially important for pulling dogs
- **Better control** - More contact points for guidance
- **Safety** - Can't slip off like collars
- **Comfort** - Distributes pressure across chest
- **Medical benefits** - Essential for dogs with trachea issues

### When Collars Work Better:
- Well-trained dogs who don't pull
- Quick garden trips
- ID tag backup (always keep collar with tags on)

## Types of Harnesses

### Back-Clip Harnesses
**Best for:** Calm, trained dogs who don't pull
**Pros:** Easy to put on, comfortable for dog
**Cons:** Can encourage pulling, less control
**Great for:** Leisurely Roberts Park strolls

### Front-Clip Harnesses  
**Best for:** Dogs who pull, training situations
**Pros:** Discourages pulling, gives more control
**Cons:** Can cause dogs to crab-walk initially
**Great for:** Busy canal towpath walks

### Dual-Clip Harnesses
**Best for:** Versatile walking needs
**Pros:** Can use front clip for training, back clip for freedom
**Cons:** Slightly more expensive
**Great for:** Most Saltaire walking situations

### Step-In Harnesses
**Best for:** Dogs who dislike things going over their head
**Pros:** Easy to put on, less stressful
**Cons:** Can be escaped by determined dogs
**Great for:** Anxious or elderly dogs

## Measuring for Perfect Fit

### You'll Need:
- Soft measuring tape
- Treats for cooperation!
- Helper (optional)

### Key Measurements:

**Chest Circumference:**
Measure around the widest part of the chest, behind the front legs. Add 1-2 inches for comfort.

**Neck Circumference:**  
Measure where a collar would sit. Should fit 2 fingers underneath.

**Body Length:**
From base of neck to base of tail (for some harness styles).

### Fit Check Points:
- Should not restrict shoulder movement
- No chafing under legs or chest
- Can't be backed out of when fitted correctly
- Comfortable for dog to sit and lie down

## Recommended Harnesses by Situation

### For Pullers (Canal Towpath Control)
**Ruffwear Front Range** - Dual clip, excellent control
**Julius-K9** - Strong, secure, good for larger dogs
**Halti Walking Harness** - Front clip design specifically for pulling

### For Comfortable Walking (Roberts Park Leisure)
**Ruffwear Web Master** - Padded, secure, great for senior dogs
**Hurtta Weekend Warrior** - Comfortable, weather-resistant
**Perfect Fit Harness** - Modular system, ultimate customisation

### For Training
**Sense-ation No-Pull** - Front clip, gentle guidance
**PetSafe Easy Walk** - Simple, effective, budget-friendly
**Blue-9 Balance Harness** - Professional choice, very adjustable

### For Escape Artists
**Ruffwear Web Master** - Five contact points, ultra-secure
**Perfect Fit Fleece Lined** - Comfortable but escape-proof
**Julius-K9 Power Harness** - Robust, secure design

## Seasonal Considerations

### Summer in Saltaire:
- Look for breathable mesh panels
- Light colors reflect heat
- Quick-dry materials for canal splashes
- Avoid heavy padding

### Winter Walking:
- Weather-resistant materials
- Reflective elements for dark mornings
- Compatible with coats
- Easy to put on with gloves

## Common Fitting Mistakes

**Too Loose:** Dog can back out, straps slide around
**Too Tight:** Restricts movement, causes chafing
**Wrong Size:** Gaps around chest or shoulders
**Strap Placement:** Sits too low or high on chest

## Introducing a New Harness

### Day 1-3: Positive Association
- Let dog sniff and investigate harness
- Give treats near the harness
- Put harness on briefly with lots of rewards
- Remove before dog gets uncomfortable

### Day 4-7: Short Wearing Sessions
- Put harness on for 5-10 minutes indoors
- Distract with play or training
- Gradually increase wearing time
- Always end positively

### Week 2+: First Walks
- Start with familiar routes
- Keep first harness walks short
- Reward calm behavior
- Monitor for any rubbing or discomfort

## Maintenance and Care

### Regular Checks:
- Weekly fit assessment (dogs grow/lose weight)
- Check for wear on straps and buckles
- Clean according to manufacturer instructions
- Replace when worn or damaged

### Cleaning Tips:
- Most machine washable on gentle cycle
- Air dry to prevent strap shrinkage
- Use pet-safe detergents
- Check hardware after washing

## Local Shopping Tips

Visit local pet shops in Shipley or Bradford to try before buying. Staff can help with fitting, and your dog can get comfortable with the process.

Many harness manufacturers offer good return policies if the fit isn't perfect—take advantage when buying online.

## Red Flags: When to Replace

- Fraying straps
- Bent or broken buckles  
- Permanent odor despite cleaning
- No longer fits properly
- Any sign of chafing or discomfort

The right harness is an investment in comfortable, safe walks around beautiful Saltaire. Take time to find the perfect fit—both you and your dog will appreciate the difference on every adventure!

*Need help choosing? Your Saltaire Dog Walks team has experience with many harness brands and can offer personalized recommendations during our meet & greet visits.*`,
    coverImage: {
      src: '/choosing-a-harness.jpg',
      alt: 'Various dog harnesses laid out with measuring tape and happy dog wearing properly fitted harness',
      width: 1200,
      height: 800
    },
    author: {
      name: 'Saltaire Dog Walks',
      avatar: '/logo.svg'
    },
    datePublished: '2024-08-22T16:00:00Z',
    readingTime: 9,
    category: 'Equipment',
    tags: ['harness', 'equipment', 'fitting', 'pulling', 'comfort'],
    stats: {
      views: 1856,
      likes: 134,
      helpfulVotes: 98
    },
    seo: {
      metaDescription: 'Complete dog harness buying guide. Compare types, get fitting tips, and find the perfect harness for your walking style around Saltaire.',
      ogImage: '/blog/og/dog-harness-guide.jpg'
    },
    featured: false
  },

  {
    slug: 'saltaire-dog-walking-guide-2025-best-routes-times-local-rules',
    title: 'Saltaire Dog Walking Guide 2025: Best Routes, Times & Local Rules',
    excerpt: 'The definitive 2025 guide to walking your dog in Saltaire: best routes, quiet times, safety & local etiquette — plus seasonal tips and gear.',
    content: `# Saltaire Dog Walking Guide 2025\n\nYour complete local playbook for relaxed, safe and enriching walks around Saltaire. Explore the best routes, quieter times, local rules and seasonal tips.`,
    coverImage: {
      src: '/dog-harness-blog-cover.png',
      alt: 'Dog by the river in Saltaire',
      width: 1200,
      height: 800
    },
    author: {
      name: 'Saltaire Dog Walks',
      avatar: '/logo.svg'
    },
    datePublished: '2025-10-08T00:00:00Z',
    readingTime: 9,
    category: 'Walking',
    tags: ['Saltaire', 'routes', 'local rules', 'best times'],
    location: 'Saltaire',
    stats: {
      views: 0,
      likes: 0,
      helpfulVotes: 0
    },
    seo: {
      metaDescription: 'Best walking routes, quiet times and local etiquette for Saltaire in 2025 — plus seasonal safety and gear tips.',
      ogImage: '/og-default.jpg'
    },
    featured: false
  }
  
  // Add more posts to reach 12+ total...
  ,
  // Client-only pages added to dataset for uniform listing
  {
    slug: 'choosing-a-saltaire-dog-walker-prices-insurance-references-red-flags',
    title: 'Choosing a Saltaire Dog Walker: Prices, Insurance, References & Red Flags',
    excerpt: 'Make an informed choice—what to ask, what to check, and how to compare local dog walkers fairly.',
    content: `<p>Coming soon: a clear checklist to help you compare local dog walkers fairly and safely.</p>`,
    coverImage: { src: '/saltaire-dog-river.png', alt: 'Dog by the river in Saltaire', width: 1200, height: 800 },
    author: { name: 'Saltaire Dog Walks', avatar: '/logo.svg' },
    datePublished: '2025-10-01T00:00:00Z',
    readingTime: 7,
    category: 'News',
    tags: ['checklist', 'local walkers', 'pricing'],
    stats: { views: 0, likes: 0, helpfulVotes: 0 },
    seo: { metaDescription: 'How to choose a Saltaire dog walker—prices, insurance, references and common red flags.' },
    featured: false,
  },
  {
    slug: 'weekend-dog-walking-in-saltaire-quiet-hour-slots-crowd-avoidance-cafes',
    title: 'Weekend Dog Walking in Saltaire: Quiet Hour Slots, Crowd-Avoidance & Cafés',
    excerpt: 'Navigate busy weekends with ease—quiet slots, crowd-avoidance routes, and best post-walk cafés.',
    content: `<p>A practical, friendly guide to calm weekend walks—time windows, quieter routes and welcoming cafés.</p>`,
    coverImage: { src: '/saltaire-victoria-road-schnauzer-on-lead.jpg', alt: 'Schnauzer on lead in Saltaire', width: 1200, height: 800 },
    author: { name: 'Saltaire Dog Walks', avatar: '/logo.svg' },
    datePublished: '2025-09-15T00:00:00Z',
    readingTime: 5,
    category: 'Walking',
    tags: ['weekend', 'quiet slots', 'cafes'],
    location: 'Saltaire',
    stats: { views: 0, likes: 0, helpfulVotes: 0 },
    seo: { metaDescription: 'Quiet hour slots, crowd-avoidance routes and the best dog-friendly cafés around Saltaire.' },
    featured: false,
  },
  {
    slug: 'roberts-park-dog-walks-safe-routes-off-lead-areas-and-parking-tips',
    title: 'Roberts Park Dog Walks: Safe Routes, Off-Lead Areas, and Parking Tips',
    excerpt: 'Local knowledge for easy, enjoyable Roberts Park walks—what to know before you go.',
    content: `<p>Where to park, which paths to choose, and how to plan calm off-lead time in Roberts Park.</p>`,
    coverImage: { src: '/north-cliffe-dog-rainbow.jpg', alt: 'Park scene with dog', width: 1200, height: 800 },
    author: { name: 'Saltaire Dog Walks', avatar: '/logo.svg' },
    datePublished: '2025-09-10T00:00:00Z',
    readingTime: 6,
    category: 'Local Spots',
    tags: ['Roberts Park', 'parking', 'off-lead'],
    location: 'Saltaire',
    stats: { views: 0, likes: 0, helpfulVotes: 0 },
    seo: { metaDescription: 'Plan the perfect Roberts Park dog walk: off-lead guidance, safe routes, and parking tips.' },
    featured: false,
  },
  {
    slug: 'puppy-socialisation-in-saltaire-where-to-walk-when-to-go-what-to-bring',
    title: 'Puppy Socialisation in Saltaire: Where to Walk, When to Go, What to Bring',
    excerpt: 'Set your puppy up for success with calm, positive experiences around Saltaire.',
    content: `<p>Quiet-time routes, what to pack, and how to build confident early adventures.</p>`,
    coverImage: { src: '/saltaire-dog-river.png', alt: 'Puppy walking kit', width: 1200, height: 800 },
    author: { name: 'Saltaire Dog Walks', avatar: '/logo.svg' },
    datePublished: '2025-08-25T00:00:00Z',
    readingTime: 6,
    category: 'Puppy',
    tags: ['socialisation', 'first walks'],
    stats: { views: 0, likes: 0, helpfulVotes: 0 },
    seo: { metaDescription: 'Local-first guide to puppy socialisation—routes, timing, and kit for confident first walks.' },
    featured: false,
  },
  {
    slug: 'rainy-day-dog-walks-in-saltaire-low-mud-paths-towpath-alternatives-gear',
    title: 'Rainy-Day Dog Walks in Saltaire: Low-Mud Paths, Towpath Alternatives & Gear',
    excerpt: 'Keep it calm and tidy on wet days—choose lower-mud loops and the right kit.',
    content: `<p>Low-mud loop ideas around Saltaire and kit that helps on wetter days.</p>`,
    coverImage: { src: '/walking-sat-dog.jpg', alt: 'Dog walking in drizzle', width: 1200, height: 800 },
    author: { name: 'Saltaire Dog Walks', avatar: '/logo.svg' },
    datePublished: '2025-08-10T00:00:00Z',
    readingTime: 5,
    category: 'Safety',
    tags: ['rainy day', 'low mud', 'gear'],
    stats: { views: 0, likes: 0, helpfulVotes: 0 },
    seo: { metaDescription: 'Low-mud path ideas and rainy-day gear tips for Saltaire dog walks.' },
    featured: false,
  },
  {
    slug: 'off-lead-rules-around-saltaire-bradford-whats-allowed-and-where',
    title: 'Off-Lead Rules Around Saltaire & Bradford: What’s Allowed and Where',
    excerpt: 'A practical guide to local rules and sensible off-lead choices.',
    content: `<p>Clear, friendly overview of local PSPOs, seasonal rules and where off-lead can work safely.</p>`,
    coverImage: { src: '/saltaire-dog-river.png', alt: 'Dog off lead', width: 1200, height: 800 },
    author: { name: 'Saltaire Dog Walks', avatar: '/logo.svg' },
    datePublished: '2025-07-28T00:00:00Z',
    readingTime: 6,
    category: 'Safety',
    tags: ['off lead', 'rules', 'PSPO'],
    stats: { views: 0, likes: 0, helpfulVotes: 0 },
    seo: { metaDescription: 'Understand local PSPOs, seasonal restrictions and where off-lead time is appropriate.' },
    featured: false,
  },
  {
    slug: 'dog-friendly-saltaire-cafes-pubs-and-post-walk-spots-near-the-canal',
    title: 'Dog-Friendly Saltaire: Cafés, Pubs, and Post-Walk Spots Near the Canal',
    excerpt: 'Where to get water bowls, treats, and welcoming staff after your walk.',
    content: `<p>Our favourite dog-friendly cafés and pubs close to the canal and Roberts Park.</p>`,
    coverImage: { src: '/poodle-brown.png', alt: 'Dog friendly icon', width: 1200, height: 800 },
    author: { name: 'Saltaire Dog Walks', avatar: '/logo.svg' },
    datePublished: '2025-07-10T00:00:00Z',
    readingTime: 4,
    category: 'Local Spots',
    tags: ['cafes', 'pubs', 'dog friendly'],
    stats: { views: 0, likes: 0, helpfulVotes: 0 },
    seo: { metaDescription: 'Dog-friendly cafés and pubs near the canal with outdoor seating and water bowls.' },
    featured: false,
  },
  {
    slug: 'hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access',
    title: 'Hirst Wood & Shipley Glen with Dogs: Circular Walks, Mud Levels & Access',
    excerpt: 'Plan your woodland walks with practical, local detail—especially helpful after rain.',
    content: `<p>Circular route suggestions with honest mud ratings and access notes.</p>`,
    coverImage: { src: '/poodle-walking-shipley-glenn.jpg', alt: 'Dog walking in woodland', width: 1200, height: 800 },
    author: { name: 'Saltaire Dog Walks', avatar: '/logo.svg' },
    datePublished: '2025-06-30T00:00:00Z',
    readingTime: 6,
    category: 'Local Spots',
    tags: ['Hirst Wood', 'Shipley Glen', 'mud levels'],
    stats: { views: 0, likes: 0, helpfulVotes: 0 },
    seo: { metaDescription: 'Circular routes, seasonal mud levels, and access notes for Hirst Wood and Shipley Glen.' },
    featured: false,
  },
  {
    slug: 'leeds-liverpool-canal-walks-in-saltaire-dog-safety-etiquette-busy-times',
    title: 'Leeds–Liverpool Canal Walks in Saltaire: Dog Safety, Etiquette & Busy Times',
    excerpt: 'Make the most of the towpath—stay safe and keep it calm at busier times.',
    content: `<p>How to enjoy the canal towpath in Saltaire with a focus on safety, etiquette and calmer timing.</p>`,
    coverImage: { src: '/saltaire-canal-retriever-on-lead-cobbles.jpg', alt: 'Retriever on Saltaire canal towpath', width: 1200, height: 800 },
    author: { name: 'Saltaire Dog Walks', avatar: '/logo.svg' },
    datePublished: '2025-06-15T00:00:00Z',
    readingTime: 5,
    category: 'Local Spots',
    tags: ['canal towpath', 'etiquette', 'timing'],
    location: 'Saltaire',
    stats: { views: 0, likes: 0, helpfulVotes: 0 },
    seo: { metaDescription: 'Towpath safety, etiquette and timing tips for enjoyable canal walks in Saltaire.' },
    featured: false,
  },
  // Spread 50 placeholders at the end
  ...generatePlaceholders()
]

// Helper function to get posts by category
export function getPostsByCategory(category: BlogCategory | 'All'): BlogPost[] {
  if (category === 'All') return SAMPLE_BLOG_POSTS
  return SAMPLE_BLOG_POSTS.filter(post => post.category === category)
}

// Helper function to get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  return SAMPLE_BLOG_POSTS.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

// Helper function to search posts
export function searchPosts(query: string): BlogPost[] {
  const searchTerm = query.toLowerCase()
  return SAMPLE_BLOG_POSTS.filter(post =>
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}

// Helper function to get featured post
export function getFeaturedPost(): BlogPost | null {
  return SAMPLE_BLOG_POSTS.find(post => post.featured) || null
}

// Helper function to get popular posts
export function getPopularPosts(limit: number = 5): BlogPost[] {
  return [...SAMPLE_BLOG_POSTS]
    .sort((a, b) => (b.stats.views + b.stats.likes * 3) - (a.stats.views + a.stats.likes * 3))
    .slice(0, limit)
}

// Helper function to get related posts
export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return SAMPLE_BLOG_POSTS
    .filter(post => 
      post.slug !== currentPost.slug && 
      (post.category === currentPost.category ||
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit)
}
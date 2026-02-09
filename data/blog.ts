export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishDate: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "importance-of-regular-dental-checkups",
    title: "The Importance of Regular Dental Checkups",
    excerpt: "Discover why visiting your dentist every six months is crucial for maintaining optimal oral health and preventing serious dental problems.",
    featuredImage: "/blog/checkup.jpg",
    author: {
      name: "Dr. Sameer",
      avatar: "/doctors/dr-sameer.jpg",
      role: "Lead Dentist"
    },
    publishDate: "2026-02-05",
    readTime: "5 min read",
    category: "Preventive Care",
    content: `
## Why Regular Dental Checkups Matter

Regular dental checkups are the cornerstone of good oral health. Many people only visit the dentist when they experience pain or notice a problem, but by then, the issue may have already progressed significantly.

### Early Detection Saves Time and Money

During a routine checkup, your dentist can identify early signs of:

- **Cavities** - Small cavities can be filled quickly and painlessly
- **Gum disease** - Early-stage gingivitis is reversible with proper care
- **Oral cancer** - Early detection dramatically improves treatment outcomes
- **Worn fillings** - Replacing them before they fail prevents further damage

### What Happens During a Checkup?

A comprehensive dental checkup typically includes:

1. **Visual examination** of teeth, gums, and mouth
2. **X-rays** to detect hidden problems
3. **Professional cleaning** to remove plaque and tartar
4. **Oral cancer screening**
5. **Discussion** of any concerns or changes in your oral health

### How Often Should You Visit?

For most adults, visiting the dentist every six months is recommended. However, some people may need more frequent visits based on their:

- Risk of cavities or gum disease
- Overall health conditions
- Smoking or tobacco use
- Pregnancy

### The Bottom Line

Prevention is always better than cure. Regular dental checkups help you maintain a healthy smile, catch problems early, and save money on extensive treatments down the road.

**Schedule your next checkup today and invest in your oral health!**
    `
  },
  {
    slug: "foods-that-strengthen-your-teeth",
    title: "10 Foods That Strengthen Your Teeth Naturally",
    excerpt: "Learn about the best foods to include in your diet for stronger teeth and healthier gums. Your diet plays a crucial role in dental health.",
    featuredImage: "/blog/healthy-foods.jpg",
    author: {
      name: "Dr. Sameer",
      avatar: "/doctors/dr-sameer.jpg",
      role: "Lead Dentist"
    },
    publishDate: "2026-01-28",
    readTime: "7 min read",
    category: "Nutrition",
    content: `
## Eat Your Way to Stronger Teeth

What you eat directly affects your dental health. While we often focus on foods to avoid, there are many delicious foods that actually strengthen your teeth and promote healthy gums.

### 1. Dairy Products

**Cheese, milk, and yogurt** are rich in calcium and phosphates that help remineralize tooth enamel. Cheese also stimulates saliva production, which naturally cleanses your mouth.

### 2. Leafy Greens

**Spinach, kale, and other leafy greens** are packed with calcium, folic acid, and vitamins that benefit your teeth and gums.

### 3. Crunchy Fruits and Vegetables

**Apples, carrots, and celery** act as natural toothbrushes. Their crunchy texture stimulates gums and increases saliva production.

### 4. Nuts and Seeds

**Almonds, cashews, and sesame seeds** provide calcium and protein while being low in sugar.

### 5. Fish

**Fatty fish like salmon** are high in vitamin D, which helps your body absorb calcium effectively.

### 6. Green Tea

Contains **polyphenols** that reduce bacteria and acid in the mouth, helping prevent cavities and gum disease.

### 7. Water

The best beverage for your teeth! Water helps wash away food particles and keeps your mouth hydrated.

### 8. Eggs

Rich in **vitamin D and phosphorus**, eggs help protect and rebuild tooth enamel.

### 9. Strawberries

Contain **malic acid**, a natural enamel whitener, plus vitamin C for gum health.

### 10. Garlic

Has **allicin**, a compound with antibacterial properties that fights harmful oral bacteria.

### Foods to Limit

While enjoying tooth-friendly foods, remember to limit:
- Sugary snacks and drinks
- Acidic foods and beverages
- Sticky candies
- Excessive coffee and tea

**A balanced diet combined with good oral hygiene is your recipe for a lifetime of healthy smiles!**
    `
  },
  {
    slug: "understanding-root-canal-treatment",
    title: "Understanding Root Canal Treatment: Myths vs Facts",
    excerpt: "Root canal treatment has an unfair reputation. Learn the truth about this pain-relieving procedure and why it's nothing to fear.",
    featuredImage: "/blog/root-canal.jpg",
    author: {
      name: "Dr. Sameer",
      avatar: "/doctors/dr-sameer.jpg",
      role: "Lead Dentist"
    },
    publishDate: "2026-01-20",
    readTime: "6 min read",
    category: "Treatments",
    content: `
## Root Canal: Separating Fact from Fiction

Few dental procedures have as bad a reputation as root canal treatment. But is this reputation deserved? Let's separate the myths from the facts.

### Myth 1: Root Canals Are Extremely Painful

**FACT:** Modern root canal treatment is virtually painless. With today's anesthetics and techniques, patients often report that the procedure feels similar to getting a filling. The truth is, a root canal *relieves* the pain caused by infection.

### Myth 2: It's Better to Pull the Tooth

**FACT:** Saving your natural tooth is almost always the better option. Natural teeth:
- Function better than artificial replacements
- Maintain your natural bite and jaw structure
- Don't require ongoing replacements
- Are more cost-effective long-term

### Myth 3: Root Canals Cause Illness

**FACT:** This myth stems from flawed research from nearly 100 years ago. Modern scientific evidence shows absolutely no connection between root canal treatment and disease elsewhere in the body.

### What Actually Happens During a Root Canal?

1. **Anesthesia** - The area is completely numbed
2. **Access** - A small opening is made in the tooth
3. **Cleaning** - Infected pulp is removed
4. **Shaping** - The canal is cleaned and shaped
5. **Filling** - The canal is filled with biocompatible material
6. **Restoration** - A crown protects the tooth

### Signs You May Need a Root Canal

- Severe toothache
- Prolonged sensitivity to hot or cold
- Darkening of the tooth
- Swelling or tenderness in nearby gums
- A persistent pimple on the gums

### Recovery Is Quick

Most patients return to normal activities the next day. Some mild discomfort is normal but easily managed with over-the-counter pain relievers.

**Don't let myths keep you from getting the treatment you need. Root canals save teeth and relieve pain!**
    `
  },
  {
    slug: "childrens-dental-health-guide",
    title: "A Parent's Guide to Children's Dental Health",
    excerpt: "From first tooth to teen years, learn how to establish good dental habits that will last your child a lifetime.",
    featuredImage: "/blog/kids-dental.jpg",
    author: {
      name: "Dr. Sameer",
      avatar: "/doctors/dr-sameer.jpg",
      role: "Lead Dentist"
    },
    publishDate: "2026-01-15",
    readTime: "8 min read",
    category: "Pediatric Care",
    content: `
## Building Healthy Smiles from Day One

Your child's dental health journey begins before their first tooth appears. As a parent, you play a crucial role in establishing habits that will protect their teeth for life.

### Baby's First Teeth (0-12 months)

Even before teeth appear:
- **Clean gums** with a soft, damp cloth after feedings
- **Avoid** putting baby to bed with a bottle
- **Schedule** their first dental visit by age 1

### Toddler Years (1-3 years)

- Use a **rice-grain sized** amount of fluoride toothpaste
- **Brush twice daily** - you'll need to do it for them
- **Limit** sugary snacks and juice
- Make brushing **fun** with songs and games

### Preschool Age (3-6 years)

- Increase to a **pea-sized** amount of toothpaste
- **Supervise** brushing - children need help until age 7-8
- **Introduce flossing** when teeth touch
- Consider **dental sealants** for molars

### School Age (6-12 years)

- Teach **proper technique** for brushing and flossing
- **Monitor** their routine - don't just trust them!
- Address **thumb-sucking** if it continues past age 4
- Watch for **orthodontic issues**

### Teen Years

- Discuss the effects of **diet choices** on teeth
- Address concerns about **appearance**
- Consider **whitening** only after consulting dentist
- If playing sports, use a **mouthguard**

### Making Dental Visits Positive

1. **Start early** - familiarity reduces fear
2. **Stay positive** - avoid sharing your own dental anxiety
3. **Don't bribe** - it suggests there's something to fear
4. **Choose a pediatric dentist** who specializes in children

### Common Childhood Dental Issues

- **Cavities** - the most common childhood disease
- **Thumb-sucking** - usually harmless if stopped early
- **Tooth grinding** - often outgrown naturally
- **Dental anxiety** - addressed with patience and positive experiences

**Your investment in your child's dental health today will pay dividends for their entire life!**
    `
  },
  {
    slug: "dental-implants-complete-guide",
    title: "Dental Implants: Your Complete Guide to a Permanent Smile",
    excerpt: "Everything you need to know about dental implants - from candidacy to recovery, costs, and long-term care.",
    featuredImage: "/blog/implants.jpg",
    author: {
      name: "Dr. Sameer",
      avatar: "/doctors/dr-sameer.jpg",
      role: "Lead Dentist"
    },
    publishDate: "2026-01-08",
    readTime: "10 min read",
    category: "Treatments",
    content: `
## The Ultimate Guide to Dental Implants

Dental implants have revolutionized tooth replacement. If you're considering implants, this comprehensive guide will help you understand everything about this life-changing treatment.

### What Are Dental Implants?

Dental implants are titanium posts surgically placed into your jawbone to serve as artificial tooth roots. They provide a permanent foundation for replacement teeth that look, feel, and function like natural teeth.

### Components of a Dental Implant

1. **Implant** - Titanium post that fuses with jawbone
2. **Abutment** - Connector that holds the crown
3. **Crown** - Visible tooth that matches your natural teeth

### Who Is a Good Candidate?

Ideal candidates have:
- **Adequate bone density** in the jaw
- **Healthy gums** free of periodontal disease
- **Good overall health** for surgical procedures
- **Commitment** to proper oral hygiene

### The Implant Process

**Stage 1: Consultation**
- Comprehensive examination
- 3D imaging and X-rays
- Treatment planning

**Stage 2: Implant Placement**
- Minor surgical procedure
- Implant placed in jawbone
- Temporary restoration if needed

**Stage 3: Osseointegration**
- Healing period of 3-6 months
- Implant fuses with bone
- Regular check-ups to monitor progress

**Stage 4: Final Restoration**
- Abutment attached
- Custom crown created and placed
- Final adjustments made

### Benefits of Dental Implants

- **Look and function** like natural teeth
- **Preserve jawbone** and prevent bone loss
- **Don't affect** adjacent healthy teeth
- **Can last a lifetime** with proper care
- **No special cleaning** required

### Caring for Your Implants

- Brush twice daily
- Floss daily
- Regular dental checkups
- Avoid chewing hard objects
- Quit smoking if applicable

### Investment in Your Smile

While implants have a higher upfront cost than other options, their longevity and natural function make them cost-effective long-term.

**Dental implants can transform your smile and your life. Schedule a consultation to see if they're right for you!**
    `
  },
  {
    slug: "teeth-whitening-options-explained",
    title: "Teeth Whitening Options Explained: Which Is Right for You?",
    excerpt: "From over-the-counter strips to professional treatments, learn about all your teeth whitening options and their effectiveness.",
    featuredImage: "/blog/whitening.jpg",
    author: {
      name: "Dr. Sameer",
      avatar: "/doctors/dr-sameer.jpg",
      role: "Lead Dentist"
    },
    publishDate: "2025-12-28",
    readTime: "6 min read",
    category: "Cosmetic",
    content: `
## Brighten Your Smile: Whitening Options Compared

A bright, white smile can boost your confidence and make a great first impression. But with so many whitening options available, how do you choose? Let's compare them all.

### Why Do Teeth Become Discolored?

**Extrinsic stains** (surface):
- Coffee, tea, red wine
- Tobacco use
- Certain foods

**Intrinsic stains** (inside tooth):
- Aging
- Medications (like tetracycline)
- Excessive fluoride exposure
- Trauma

### Over-the-Counter Options

**Whitening Toothpaste**
- Mildly abrasive to remove surface stains
- Results: 1-2 shades lighter
- Timeline: 2-6 weeks
- Cost: ₹200-500

**Whitening Strips**
- Peroxide-based gel on flexible strips
- Results: 2-3 shades lighter
- Timeline: 2-3 weeks
- Cost: ₹1,000-3,000

**Whitening Trays (Store-bought)**
- One-size-fits-all trays with gel
- Results: 2-4 shades lighter
- Timeline: 1-2 weeks
- Cost: ₹2,000-5,000

### Professional Options

**Take-Home Professional Trays**
- Custom-fitted trays from your dentist
- Stronger whitening gel
- Results: 4-6 shades lighter
- Timeline: 1-2 weeks
- Cost: ₹8,000-15,000

**In-Office Whitening**
- Uses light-activated whitening agents
- Results: 6-8 shades lighter in one visit
- Timeline: 1-2 hours
- Cost: ₹15,000-30,000

### Which Option Is Best?

**Choose OTC products if:**
- You have minor staining
- You're on a tight budget
- You want to maintain professional results

**Choose professional treatment if:**
- You have significant discoloration
- You want dramatic results fast
- You have sensitive teeth (dentist can adjust)

### Tips for Long-Lasting Results

1. Avoid staining foods/drinks for 48 hours after whitening
2. Use a straw for coffee and tea
3. Brush after consuming staining substances
4. Touch up every 6-12 months
5. Maintain good oral hygiene

### Important Considerations

- Whitening doesn't work on crowns, veneers, or fillings
- Some sensitivity is normal
- Results vary based on the cause of staining
- Not recommended during pregnancy

**Ready for a brighter smile? Consult with us to find your perfect whitening solution!**
    `
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

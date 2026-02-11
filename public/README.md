# Public Assets Folder Structure

This folder contains all static assets for the Dental Essential website.

## Folder Organization

- **`/images/services/`** - Service-related images (root canal, implants, braces, etc.)
- **`/images/blog/`** - Blog post featured images and article photos
- **`/images/doctors/`** - Doctor profile photos and team images
- **`/images/gallery/`** - Clinic photos, treatment photos, testimonial images
- **`/images/`** - General site images (hero, logos, icons)

## How to Use

1. Place your images in the appropriate folder
2. Reference them in your code using the path from `/public/`:

```tsx
// Example in React/Next.js:
<Image src="/images/services/root-canal.jpg" alt="Root Canal Treatment" width={500} height={300} />

// Or with regular img tag:
<img src="/images/blog/dental-tips.jpg" alt="Dental Tips" />
```

## Image Guidelines

- **Format**: Use JPG for photos, PNG for graphics with transparency, WebP for optimized images
- **Size**: Optimize images before upload (recommended max 500KB per image)
- **Naming**: Use descriptive, lowercase names with hyphens (e.g., `dental-implant-procedure.jpg`)
- **Dimensions**: 
  - Service images: 800x600px
  - Blog featured images: 1200x630px
  - Doctor photos: 400x400px

## Current Image Paths in Code

Your code currently references these paths:
- `/services/*.jpg` → Move to `/images/services/`
- `/blog/*.jpg` → Move to `/images/blog/`
- `/doctors/*.jpg` → Move to `/images/doctors/`
- `/hero.jpg`, `/mission.jpg`, `/map.png` → Move to `/images/`

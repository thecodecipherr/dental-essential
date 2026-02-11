import { blogPosts } from '@/data/blog';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Dental Essential - Dental Health Tips & Articles',
  description: 'Read our latest articles on dental health, treatments, tips for maintaining a healthy smile, and updates from Dental Essential.',
  keywords: 'dental blog, oral health tips, dental care articles, teeth health, dental treatments',
  openGraph: {
    title: 'Blog | Dental Essential',
    description: 'Expert dental health tips and articles from Dental Essential.',
    type: 'website',
  },
};

export default function BlogPage() {
  // Get unique categories
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-sky-500 to-sky-600 py-20">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            DENTAL HEALTH INSIGHTS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-sky-100 max-w-2xl mx-auto text-lg">
            Stay informed with the latest dental health tips, treatment guides, and expert advice 
            from our experienced team at Dental Essential.
          </p>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100V0C240 66.6667 480 100 720 100C960 100 1200 66.6667 1440 0V100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-gray-600 font-medium">Categories:</span>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="bg-gray-100 hover:bg-sky-100 text-gray-700 hover:text-sky-600 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Image */}
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-sky-200 to-sky-300 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl opacity-40">📰</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <span className="text-sky-600 font-medium text-sm mb-2">
                  {blogPosts[0].category} • {blogPosts[0].readTime}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  <Link href={`/blog/${blogPosts[0].slug}`} className="hover:text-sky-600 transition-colors">
                    {blogPosts[0].title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center">
                      <span className="text-sky-700 font-semibold text-sm">
                        {blogPosts[0].author.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{blogPosts[0].author.name}</p>
                      <p className="text-sm text-gray-500">{blogPosts[0].author.role}</p>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium mt-6 w-fit transition-colors"
                >
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-pink-500">Latest</span>{' '}
              <span className="text-sky-500">Articles</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of articles covering dental treatments, oral hygiene tips, 
              and everything you need for a healthy smile.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-pink-500">Have Questions?</span>{' '}
            <span className="text-sky-500">We're Here to Help</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is ready to answer your dental health questions and help you achieve the smile you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="/contact"
              className="border-2 border-sky-500 text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

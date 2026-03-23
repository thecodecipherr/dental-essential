import Link from 'next/link';
import { BlogPost, formatDate } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      {/* Featured Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-sky-100 to-sky-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-14 h-14 text-sky-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-sky-500 text-white text-xs font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span>{formatDate(post.publishDate)}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Author & Read More */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
              <span className="text-sky-600 font-semibold text-sm">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.author.role}</p>
            </div>
          </div>

          {/* Read More Link */}
          <Link
            href={`/blog/${post.slug}`}
            className="text-sky-600 hover:text-sky-700 font-medium text-sm inline-flex items-center gap-1 group/link"
          >
            Read More
            <svg 
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

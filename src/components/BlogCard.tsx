import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("sr-Latn-ME", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Card className="h-full flex flex-col">
      {/* TODO: Replace PlaceholderImage with real cover images */}
      <div className="mb-4">
        <PlaceholderImage label={post.category} className="h-40 rounded-xl" aspect="auto" />
      </div>

      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-medium px-2.5 py-1 bg-accent-teal-light text-accent-teal-dark rounded-full">
          {post.category}
        </span>
        <time className="text-xs text-secondary-400" dateTime={post.date}>
          {formattedDate}
        </time>
      </div>

      <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-2 leading-snug">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
          {post.title}
        </Link>
      </h3>

      <p className="text-sm text-secondary-500 leading-relaxed flex-1">{post.excerpt}</p>

      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
      >
        Pročitajte više
        <span aria-hidden="true">→</span>
      </Link>
    </Card>
  );
}

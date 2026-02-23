import Link from "next/link";
import Image from "next/image";
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
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-2xl md:-mx-8 md:-mt-8">
        {post.coverImage ? (
          <Link href={`/blog/${post.slug}`} className="block aspect-[16/10] relative group">
            <Image
              src={post.coverImage}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-[220ms] ease-out group-hover:scale-[1.03]"
            />
          </Link>
        ) : (
          <PlaceholderImage label={post.category} className="aspect-[16/10] rounded-t-2xl" aspect="auto" />
        )}
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

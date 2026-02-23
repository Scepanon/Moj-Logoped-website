import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHeroPlaceholder } from "@/components/ui/PageHeroPlaceholder";
import { BookingCTA } from "@/components/BookingCTA";
import { blogPosts } from "@/data/blogPosts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Članak nije pronađen" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("sr-Latn-ME", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHeroPlaceholder
        title={post.title}
        subtitle={post.excerpt}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
        meta={
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium px-2.5 py-1 bg-white/20 text-white rounded-full backdrop-blur-sm">
              {post.category}
            </span>
            <time className="text-sm text-white/80" dateTime={post.date}>
              {formattedDate}
            </time>
          </div>
        }
      />

      {/* Content */}
      <Section background="white" dividerTop>
        <article className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg max-w-none
              [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-secondary-900 [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-secondary-800 [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:text-secondary-600 [&_p]:leading-relaxed [&_p]:mb-4
              [&_ul]:space-y-2 [&_ul]:my-4 [&_ul]:pl-6
              [&_li]:text-secondary-600
              [&_ol]:space-y-2 [&_ol]:my-4 [&_ol]:pl-6
              [&_strong]:text-secondary-800
              [&_a]:text-primary-600 [&_a]:underline hover:[&_a]:text-primary-700"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </article>
      </Section>

      <div className="py-8 md:py-10 bg-bg-cream">
        <Container>
          <div className="text-center">
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              ← Nazad na sve članke
            </Link>
          </div>
        </Container>
      </div>

      <BookingCTA />
    </>
  );
}

function formatContent(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hulo])/gm, (match) => match ? `<p>${match}` : match)
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[hulo])/g, '$1')
    .replace(/(<\/[hulo][l]?>)<\/p>/g, '$1');
}

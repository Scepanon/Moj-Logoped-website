import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
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
      {/* Header */}
      <div className="bg-bg-beige py-12 md:py-16">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-secondary-400">
              <li>
                <Link href="/" className="hover:text-primary-600 transition-colors">
                  Početna
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <Link href="/blog" className="hover:text-primary-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <span className="text-secondary-700 font-medium truncate max-w-[200px]">
                  {post.title}
                </span>
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-2.5 py-1 bg-accent-teal-light text-accent-teal-dark rounded-full">
              {post.category}
            </span>
            <time className="text-sm text-secondary-400" dateTime={post.date}>
              {formattedDate}
            </time>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary-900 leading-tight max-w-3xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-secondary-500 max-w-2xl leading-relaxed">
            {post.excerpt}
          </p>
        </Container>
      </div>

      {/* Content */}
      <Section background="white">
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

      {/* CTA */}
      <Section background="cream">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-heading text-2xl font-semibold text-secondary-900">
            Imate pitanja o govorno-jezičkom razvoju?
          </h2>
          <p className="mt-3 text-secondary-500">
            Kontaktirajte nas i rado ćemo vam pomoći.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button href="/kontakt">Zakažite konsultaciju</Button>
            <Button href="/blog" variant="outline">
              Svi članci
            </Button>
          </div>
        </div>
      </Section>
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

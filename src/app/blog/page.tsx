import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Edukativni članci o govorno-jezičkom razvoju, savjeti za roditelje i informacije o logopedskoj terapiji.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Edukativni tekstovi za roditelje o govorno-jezičkom razvoju i logopedskoj terapiji."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />

      <Section background="light">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      {/* Full-width CTA */}
      <section className="bg-secondary-900 text-white">
        <Container>
          <div className="py-20 md:py-24 text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-snug">
              Spremni ste da zakažete termin?
            </h2>
            <p className="mt-5 text-secondary-300 leading-relaxed text-lg">
              Javite nam se i zajedno ćemo pronaći najbolji način da podržimo
              vaše dijete.
            </p>
            <Button href="/kontakt" className="mt-8" size="lg">
              Zakažite termin
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

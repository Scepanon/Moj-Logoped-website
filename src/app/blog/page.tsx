import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { PageHeroPlaceholder } from "@/components/ui/PageHeroPlaceholder";
import { BlogCard } from "@/components/BlogCard";
import { BookingCTA } from "@/components/BookingCTA";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Edukativni članci o govorno-jezičkom razvoju, savjeti za roditelje i informacije o logopedskoj terapiji.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroPlaceholder
        title="Blog"
        subtitle="Edukativni tekstovi za roditelje o govorno-jezičkom razvoju i logopedskoj terapiji."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />

      <Section background="light" dividerTop>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      <BookingCTA />
    </>
  );
}

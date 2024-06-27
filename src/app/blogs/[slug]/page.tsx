import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import Image from "next/image";
interface PageProps {
  params: {
    slug: string;
  };
}

const getBlogBySlug = async (slug: string) => {
  const post = allPosts.find((post) => post.slug === "/" + slug);
  if (!post) return notFound();
  return post;
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;

  const post = await getBlogBySlug(slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: ["/blog.webp", ...previousImages, post.image],
    },
  };
}

const page: React.FC<PageProps> = async ({ params }) => {
  const { slug } = params;
  const post = await getBlogBySlug(slug);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 max-w-7xl mx-auto p-4">
      <div className="mx-auto w-full min-w-0 space-y-2 md:space-y-5">
        <time className="text-gray-500">
          Published on{" "}
          {new Date(post.published).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <h2 className="text-lg md:text-4xl font-bold">{post.title}</h2>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={1280}
            height={720}
            className="rounded"
          />
        )}
        <Mdx code={post.body.code} />
      </div>
      <div className="bg-gray-950 w-full h-72 absolute bottom-0 filter right-0  blur-3xl -z-10" />
    </main>
  );
};

export default page;

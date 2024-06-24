import { allPosts } from "contentlayer/generated";
import Image from "next/image";

export const metadata = {
  title: "Blogs | Manoj Kumar",
  description: "All of my blogs...",
};

const page = () => {
  return (
    <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-10 py-12 px-4">
      {allPosts?.map((post) => (
        <a
          href={`/blogs/${post.slug}`}
          key={post._id}
          className="border rounded border-gray-800 overflow-hidden"
        >
          <Image
            src={post.image ?? ""}
            alt={post.title}
            className=""
            width={1280}
            height={720}
          />
          <div className="p-2">
            <h2 className="text-lg md:text-xl truncate font-bold">
              {post.title}
            </h2>
            <p className="truncate text-gray-400">{post.description}</p>
            <time dateTime={post.published} className="text-gray-400">
              {new Date(post.published).toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </a>
      ))}
    </main>
  );
};

export default page;

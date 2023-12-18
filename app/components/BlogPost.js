import { urlForImage } from "@/sanity/lib/image";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import DatePill from "./DatePill";

export default function BlogPostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group space-y-4 md:hover:opacity-75 transition-opacity"
    >
      <div className="max-w-[1920px] max-h-[1080px] overflow-hidden cursor-pointer rounded">
        <div className="group-hover:scale-110 group-hover:rounded overflow-hidden transition duration-500">
          <Image
            src={urlForImage(post.image).auto("format").size(1920, 1080).url()}
            width={1920}
            height={1080}
            alt={post.title}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
      <div className="space-y-2">
        {console.log("POST DESCP: " + post.description)}
        {console.log("POST Date: " + post.date)}

        <DatePill date={post.date} />
        <div>
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="line-clamp-1 text-sm text-primary-600">
            {post.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

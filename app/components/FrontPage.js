import { urlForImage } from "@/sanity/lib/image";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import DatePill from "./DatePill";

export default function FrontPage({ frontPage }) {
  return (
    <div className="space-y-2 group">
      <Image
        src={urlForImage(frontPage.profileImage).auto("format").size(1920, 1080).url()}
        width={1920}
        height={1080}
        alt={frontPage.title}
        className="rounded-2xl border border-primary-400"
      />
      <div className="space-y-2">
        <div>
          <p className="line-clamp-1 text-sm text-primary-600">
            {frontPage.aboutMe}
          </p>
        </div>
      </div>
    </div>
  );
}
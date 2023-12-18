import { urlForImage } from "@/sanity/lib/image";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import DatePill from "./DatePill";

export default function FrontPage({ frontPage }) {
  return (
    <div className="flex items-start space-x-4 group">
    <Image
      src={urlForImage(frontPage.profileImage).auto("format").size(500, 500).url()}
      width={500}
      height={500}
      alt={frontPage.title}
      className="rounded-xl border border-primary-400"
    />
    <div className="flex flex-col">
    <div className="text-xl w-64 overflow-hidden overflow-ellipsis">
      <p className="text-white">
        {frontPage.aboutMe}
      </p>
    </div>



    </div>
  </div>

  

  );
}

import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export default function Photo({ photo }) {
  return (
    <div className="space-y-2 group">
      <Image
        src={urlForImage(photo.image).auto("format").size(1920, 1080).url()}
        width={1920}
        height={1080}
        alt={photo.description}
        className="rounded-2xl border border-primary-400 md:group-hover:scale-95 transition-transform transform"
      />
      <h2 className="font-medium flex items-center justify-center">
        {photo.favorite ? <p className="text-sm mr-2">⭐️</p> : null}
        {photo.description}
      </h2>
    </div>
  );
}
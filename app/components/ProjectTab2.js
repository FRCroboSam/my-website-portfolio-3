import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import DatePill from "./DatePill";
export default function ProjectTab2({ project }) {
    return (
      <div>
        <Image
          src={urlForImage(project.projectImage).auto("format").size(1920, 1080).url()}
          width={1920}
          height={1080}
          alt={project.projectName}
          classsName="rounded-2xl border border-primary-400"
        />
        <div className="space-y-2">
  
          {/* <DatePill date={project.startDate} /> */}
          <div>
            <h2 className="text-lg font-semibold">{project.projectName}</h2>
            <p className="line-clamp-1 text-sm text-primary-600">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
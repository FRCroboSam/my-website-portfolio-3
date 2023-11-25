import BlogPostHeader from "./components/BlogPostHeader";
import Container from "../../components/Container";
import {PortableText} from "@portabletext/react"
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";

// function ImageComponent({ value }) {
//     const { width, height } = tryGetImageDimensions(value);
  
//     return (
//       <Image
//         src={urlForImage(value).fit("max").auto("format").url()}
//         width={width}
//         height={height}
//         loading="lazy"
//         className="mx-auto md:max-w-prose rounded-lg"
//         style={{
//           aspectRatio: width / height,
//         }}
//       />
//     );
//   }

// const portableTextComponents = {
//     types: {
//       image: ImageComponent,
//     },
//   };

// // export default async function Page({ params }) {
// //     const post = await getBlogPosts(params.post);
  
// //     return (
// //       <Container>
// //         <div className="mx-auto max-w-5xl space-y-8 py-8">
// //           <BlogPostHeader post={post} />
// //           <hr className="border-primary-200" />
// //         <article className="prose md:prose-md prose-primary mx-auto">
// //             <PortableText value={post.content} components={portableTextComponents} />
// //         </article>
// //         </div>
// //       </Container>
// //     );
// //   }

  export default async function BlogPost({ params }){
    const post = await getBlogPost(params.post);
    return(
        <div className="py-8 max-w-5xl px-4 mx-auto">
            {/* <BlogPostHeader post={post} /> */}
        </div>
    )
  }



async function getBlogPost(slug) {
  const query = `*[_type == "blogPost" && slug.current == $thisIsMySlug][0] {
    title,
    description,
    date,
    "slug":slug.current,
    image,
    content
  }`;

  const posts = await client.fetch(query, { thisIsMySlug: slug });
  return posts;
}
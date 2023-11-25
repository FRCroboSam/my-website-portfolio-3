
import {DefaultButton, OutlinedButton, FilledButton} from "../components/Button";
import { client } from "@/sanity/lib/client";
import Container from "../components/Container";
import BlogPostCard from "../components/BlogPost";
export default async function Blog() {
    const posts = await getBlogPosts();
    posts.map((post) => {
      console.log("VIDEO" + post.video);
      if (post.video && post.video.url) {
        console.log(post.video.url);
      }
    });
    return (
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    );
}

async function getBlogPosts() {
  const query = `*[_type == "blogPost"] | order(date desc) {
    title,
    description,
    date,
    video,
    "slug":slug.current,
      image,
      video
  }`;

  const posts = await client.fetch(query);
  console.log("POST LENGTH: " + posts.length)
  return posts;
}
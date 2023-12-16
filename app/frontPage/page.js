import Container from "../../components/Container";

import { client } from "@/sanity/lib/client";

import React from 'react'
import FrontPage from "../components/FrontPage";

export default async function FrontPage() {
    const frontPage = await getFrontPage();
    return (
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* <FrontPage key={frontPage.slug} frontPage={frontPage} /> */}
        </div>
      </Container>
    );
}

async function getFrontPage() {
  const query = `*[_type == "frontPage"][0] {
    title,
    aboutMe,
    profileImage,
  }`;
  const frontPage = await client.fetch(query);
  console.log(frontPage.title)

  return frontPage;
}
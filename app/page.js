// Import React at the beginning
'use client'; //means you cant call 
import React from 'react';
//SWR client side calls without doing that 
// Import Container component
import Container from "./components/Container";
import FrontPage from './components/FrontPage';
import { client } from "@/sanity/lib/client";

// Define Popup component
function Popup({ clue, onClick }) {
  return (
    <>
      <div className="Overlay" />
      <div className="Popup">
        {`This is the popup with clue: ${clue}`}
      </div>
    </>
  );
}

export async function FrontPage2() {
  const frontPage = await getFrontPage();
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FrontPage key={frontPage.slug} frontPage={frontPage} />
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

// Define Home component
export default function Home() {
  return (
    <Container>
      <FrontPage2 />
    </Container>
  );
}

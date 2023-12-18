// Import React at the beginning
'use client'; //means you cant call 
import React from 'react';
//SWR client side calls without doing that 
// Import Container component
import Container from "./components/Container";
import Blog from './blog/page';
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

// export async function FrontPage2() {
//   const frontPage = await getFrontPage();
//   return (
//     <Container>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <FrontPage key={frontPage.slug} frontPage={frontPage} />
//       </div>
//     </Container>
//   );
// }

// export async function Projects(){
//   const projects = await getProjects(); 
//   return (
//     <Container>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {projects.map((project) => (
//             <ProjectTab key={project.slug} project={project} />
//         ))}
//       </div>
//     </Container>
//   );
// }

// async function getFrontPage() {
//   const query = `*[_type == "frontPage"][0] {
//     title,
//     aboutMe,  
//     profileImage,
//   }`;
//   const frontPage = await client.fetch(query);
//   console.log(frontPage.title)

//   return frontPage;
// }

// async function getProjects(){
//   const query = `*[_type == "Project"] {
//     projectName,
//     projectDescription,  
//     dateStarted,
//     projectImage
//   }`;

//   const projects = await client.fetch(query);
//   console.log(projects[0].projectImage)

//   return projects;
// }

// Define Home component
export default function Home() {
  return (
    <Container>
      <Blog />
    </Container>
  );
}

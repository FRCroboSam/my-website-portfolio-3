import Container from "../components/Container";
import { client } from "@/sanity/lib/client";
import Photo from "../components/PhotoCard"
export default async function Photos() {

  const dogs = await getDogs();
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {dogs.map((dog) => (
          <Photo key={dog.description} photo={dog}/>
        ))}
      </div>
    </Container>
    
  );
}


async function getDogs() {
  const query = `*[_type == "photo"]{
    favorite,
    image,
      description
  }`;

  const posts = await client.fetch(query);
  return posts;
}


// function DogCard({ dog }) {
//   return (
//     <li className="border md:hover:scale-95 transition-transform border-primary-200 bg-gradient-to-bl from-secondary-100 to-white via-white rounded-xl p-4 flex items-start justify-start space-x-4">
//       <img
//         src={dog.pic}
//         alt={dog.name}
//         className="w-40 h-40 rounded-lg border object-cover border-primary-200"
//       />
//       <div className="space-y-4">
//         <div className="space-y-1">
//           <h3 className="text-lg font-medium">{dog.name}</h3>
//           <p className="uppercase text-xs font-medium text-primary-600">
//             {dog.age} year{dog.age === 1 ? "" : "s"} old
//           </p>
//         </div>
//         <div className="space-y-2">
//           <h4 className="text-sm font-medium">Favorite Toys</h4>
//           <ul className="flex flex-wrap gap-2">
//             {dog.favorite_toys.map((toy) => (
//               <li
//                 key={toy}
//                 className="text-xs text-secondary-800 rounded-full px-2 py-0.5 bg-secondary-100"
//               >
//                 {toy}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </li>
//   );
// }
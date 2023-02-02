import Image from "next/image";
import { FaGithub, FaGlobe, FaEdit } from "react-icons/fa";

const data = [
  {
    id: 1,
    image:
      "https://novyapp.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnovyapp%2Fimage%2Fupload%2Fv1660048116%2Fnovyapp%2Fbsdl0uw7309uckzjhjje.png&w=640&q=75",
    title: "TIKMA - TICKET BOOKING SYSTEM FOR CINEMAS",
    description:
      "Ticket movie booking system with backend dashboard to set Cinema structure.",
    techstack: "NextJs, Tailwind, Typescript, tRPC, NextAuth and Prisma",
  },
];

export default function Modal({ onClose }) {
  return (
    <div className="absolute left-0 z-20 m-8 h-[80%]  w-2/3 overflow-auto  rounded-md border border-zinc-600 bg-black/80 bg-scroll p-4 text-zinc-200 ">
      <button onClick={onClose} className="absolute right-5">
        X
      </button>
      <div className="space-y-4 p-4">
        <h1 className="text-6xl font-semibold">
          TIKMA - TICKET BOOKING SYSTEM FOR CINEMAS
        </h1>
        <Image
          width={1000}
          height={500}
          alt="image"
          src="https://novyapp.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnovyapp%2Fimage%2Fupload%2Fv1660048116%2Fnovyapp%2Fbsdl0uw7309uckzjhjje.png&w=640&q=75"
        />
        <div>
          <div className="flex space-x-4">
            <a target="_blank">
              <button className="flex w-auto items-center rounded-md border border-zinc-600 bg-zinc-900 p-2">
                <FaGlobe className="mr-2" />
                Live Demo
              </button>
            </a>

            <a target="_blank">
              <button className="flex w-auto items-center rounded-md border border-zinc-600 bg-zinc-900 p-2">
                <FaGithub className="mr-2" />
                Github
              </button>
            </a>
          </div>
        </div>
        <p>
          Ticket movie booking system with backend dashboard to set Cinema
          structure.
        </p>
        <p>
          Tech Stack used in the project:
          <ul>
            <li>NextJs </li>
            <li>NextAuth</li>
            <li>tRPC</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>Prisma</li>
          </ul>
        </p>
        <p>
          <video
            className="rounded-xl"
            controls
            width="100%"
            src="https://user-images.githubusercontent.com/86293253/180744513-2fc775e1-e14e-4304-a9ee-ad93f3a57505.mp4"
          ></video>
        </p>
      </div>
    </div>
  );
}

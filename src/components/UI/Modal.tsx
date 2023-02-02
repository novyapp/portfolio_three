export default function Modal({ onClose }) {
  return (
    <div className="absolute left-0 z-20 m-8 h-[90%]  w-2/3 overflow-auto  rounded-md border border-zinc-600 bg-black/80 bg-scroll p-4 text-zinc-200 ">
      <button onClick={onClose} className="absolute right-5">
        X
      </button>
      <div className="space-y-4">
        <h1 className="text-6xl font-semibold">
          TIKMA - TICKET BOOKING SYSTEM FOR CINEMAS
        </h1>
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

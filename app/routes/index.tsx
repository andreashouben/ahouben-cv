import portrait from "./portrait.png";

export default function Index() {
  return (
    <div className="container mx-auto pt-10 grid grid-cols-12">
      <div className="col-span-9">
        <h1 className="font-serif text-left text-6xl">Andreas Houben</h1>
        <h2 className="font-serif text-left text-4xl pt-3">
          Software Engineer
        </h2>
      </div>
      <div className="col-span-3 drop-shadow-2xl outline outline-1 rounded-3xl">
        <img
          className="rounded-3xl "
          src={portrait}
          alt="Portrait of Andreas Houben"
        />
      </div>
    </div>
  );
}

import ShowcasePanel from "@/components/Showcase";

export default function Home() {
  return (
    <main>
      <div className="container flex-row mx-auto text-wrap justify-start pt-24 pb-12 px-3">
        <h1 className="text-3xl tracking-normal flex mb-4 font-light">
            <span>Hello, Im Ronmar.</span>
        </h1>
        <h2 className="text-5xl tracking-normal flex mb-2 font-light">
            <span >I design <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-purple-700 via-70% to-fuchsia-500 selection:text-cinder-400">beautiful & meaningful</span> experiences.
            </span>
        </h2>
        <h2 className="text-5xl tracking-normal flex mb-2 font-light">
          <span>Currently, working at <span className="text-gray-700 bg-green-200">Woolworths</span>.
          </span>
        </h2>
      </div>
      <ShowcasePanel num = "1" />
    </main>
  

  );
}

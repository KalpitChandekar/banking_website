import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto relative">
        <div>
          <div className="bg-secondary_pink h-full w-2/4 absolute top-0 right-0 -z-10" />
          <Navbar />
          <Hero />
        </div>
      </section>
    </main>
  );
};
export default page;

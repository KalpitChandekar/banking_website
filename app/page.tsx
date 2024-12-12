import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Idpc from "@/components/Idpc";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
const page = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto relative">
        <div className="bg-secondary_pink h-full w-2/4 absolute top-0 right-0 -z-10" />
        <Navbar />
        <Hero />
      </section>
      <Experience />
      <Partners />
      <Idpc />
    </main>
  );
};
export default page;

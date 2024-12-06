import Image from "next/image";

const Partners = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 space-y-16 px-4">
      <h2 className="text-2xl text-center">BUSINESS PARTNERS</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-48 items-center">
        <Image
          src="/partner1.png"
          alt="partner1"
          width={743}
          height={442}
          className="w-44"
        />
        <Image
          src="/partner2.png"
          alt="partner2"
          width={743}
          height={442}
          className="w-44"
        />
        <Image
          src="/partner3.png"
          alt="partner3"
          width={743}
          height={442}
          className="w-44"
        />
        <Image
          src="/partner4.png"
          alt="partner4"
          width={743}
          height={442}
          className="w-44"
        />
      </div>
      <Image
        src="/dotes.png"
        alt="dotes"
        width={448}
        height={580}
        className="max-w-20 w-full mx-auto -rotate-90"
      />
    </section>
  );
};
export default Partners;

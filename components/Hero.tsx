import Image from "next/image";
import Button from "./Button";
import { Car, Home, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 items-center justify-center relative">
      <div className="flex flex-col gap-6 max-w-md">
        <h1 className="text-6xl font-bold">Chase Your Dream with us </h1>
        <p className="text-gray-500">
          The harder you work for something, the greater you’ll feel when you
          achieve it.
        </p>
        <div className="flex gap-4">
          <Button
            text="APPLY ONLINE"
            className="bg-primary_pink text-white hover:bg-white hover:text-primary_pink"
          />
          <Button
            text="LOAN CALCULATOR"
            className="text-primary_pink hover:bg-primary_pink hover:text-white"
          />
        </div>
        <div className="flex items-center gap-4 mt-28">
          <Phone
            className="text-primary_pink cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
            size={24}
          />
          <p className="text-xl font-bold">+91980</p>
          <div className="w-[2px] h-7 rounded-full bg-gray-300" />
          <Image
            src="/facebook.png"
            alt="facebook"
            width={96}
            height={96}
            className="max-w-6 w-full cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
          />
          <Image
            src="/linkedin.png"
            alt="linkedin"
            width={96}
            height={96}
            className="max-w-6 w-full cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
          />
          <Image
            src="/youtube.png"
            alt="youtube"
            width={96}
            height={96}
            className="max-w-6 w-full cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
          />
          <Image
            src="/instagram.png"
            alt="instagram"
            width={96}
            height={96}
            className="max-w-6 w-full cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
      <Image
        src="/hero.png"
        alt="hero"
        width={3532}
        height={2616}
        className="max-w-3xl w-full"
      />
      <Image
        src="/dotes.png"
        alt="dotes"
        width={448}
        height={580}
        className="absolute bottom-34 right-0 max-w-24 w-full"
      />
      <div className="cursor-pointer absolute top-10 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white text-black p-4 rounded-full shadow-lg">
        <Car className="text-primary_pink" size={24} />
        <p className="text-base font-bold">Car Loan</p>
      </div>
      <div className="cursor-pointer absolute right-20 top-1/4 flex items-center gap-4 bg-white text-black p-4 rounded-full shadow-lg">
        <Home className="text-primary_pink" size={24} />
        <p className="text-base font-bold">Home Loan</p>
      </div>
    </section>
  );
};
export default Hero;

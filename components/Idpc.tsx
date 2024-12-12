import { MoveRight } from "lucide-react";
import Image from "next/image";

const Idpc = () => {
  return (
    <div className="mx-auto max-w-7xl flex items-center justify-center my-10 gap-20">
      <Image
        src="/idpc.png"
        height={2472}
        width={2440}
        alt="idpc"
        className="max-w-lg w-full rounded-sm"
      />
      <div className="space-y-4 max-w-md">
        <h1 className="text-3xl font-semibold">IDPC AT A GLANCE</h1>
        <p className="pb-4">
          IPDC Finance Limited (previously known as &ldquo;Industrial Promotion
          and Development Company of Bangladesh Limited&rdquo;) is the first
          private sector financial institution of the country established in
          1981 by a distinguished group of shareholders namely International
          Finance Corporation (IFC), USA, German Investment and Development
          Company (DEG), Germany, The Aga Khan Fund for Economic Development
          (AKFED), Switzerland, Commonwealth Development Corporation (CDC), UK
          and the Government of Bangladesh
        </p>
        <button className="text-primary_pink cursor-pointer font-semibold flex gap-4">
          Read More <MoveRight />
        </button>
      </div>
    </div>
  );
};
export default Idpc;

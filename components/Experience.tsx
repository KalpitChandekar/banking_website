import Image from "next/image";

const experienceData = [
  {
    imgSrc: "/experience1.png",
    title: "Integrity",
    description:
      "Displaying the highest level of Integrity in the way we conduct our business",
  },
  {
    imgSrc: "/experience2.png",
    title: "Demonstrate",
    description: "Demonstrating a strong Will to Win in the market place",
  },
  {
    imgSrc: "/experience3.png",
    title: "Diversity",
    description: "Promoting Diversity in the work place and community",
  },
  {
    imgSrc: "/experience4.png",
    title: "Teamwork",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id pen",
  },
  {
    imgSrc: "/experience5.png",
    title: "Collaboration",
    description:
      "Displaying the highest level of Integrity in the way we conduct our business",
  },
  {
    imgSrc: "/experience6.png",
    title: "Technology",
    description:
      "Harnessing the power of Technology to deliver better customer experience",
  },
  {
    imgSrc: "/experience7.png",
    title: "Corporate",
    description:
      "Setting the standard for the best Corporate Citizenship in the communities we work",
  },
  {
    imgSrc: "/experience8.png",
    title: "Digital",
    description:
      "Setting the standard for the best Corporate Citizenship in the communities we work",
  },
];

const Experience = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 my-32 space-y-28">
      <div className="space-y-5">
        <h1 className="text-3xl font-bold text-center">
          Creating Extraordinary Customer Experience
        </h1>
        <p className="text-center text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          bibendum eget morbi <br /> dignissim eu pharetra consequat montes,
          sagittis.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-40 gap-y-14">
        {experienceData.map((item, index) => (
          <div key={index} className="space-y-1">
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={148}
              height={148}
              className="w-9"
            />
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Experience;

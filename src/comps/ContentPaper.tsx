import Link from "next/link";

const mockData = [
  {
    title: "1. A MULTI-PURPOSE ELECTRON BEAM PROCESSING",
    image: "scan_system01.jpg",
    description:
      "A state-of-the-art electron beam accelerator was designed into a multi-purpose processing plant in Cranbury, New Jersey for use in radiation modification of polymer products and materials, and radiation sterilization of medical devices.",
    isMain: true,
  },
  {
    title: "2. An Economic For Electron Beam",
    image: "comparison.JPG",
    description:
      "An Economic Analysis of Electron Accelerators and Cobalt-60 for Irradiating Food. By Rosanna Mentzer Morrison, Commodity Economics Division, Economic Research Service, U.S. Department of Agriculture. Technical Bulletin No. 1762.",
    isMain: false,
  },
  {
    title:
      "3. Average Depths of Electron Penetration Use as Characteristic Depths of Exposure",
    image: "7.JPG",
    description:
      "The average depth of electron penetration is introduced as the physical quantity useful in electron beam irradiation. It is defined as the average Of the maximum depths On thetrajectories of electrons passing through finite, semi-infiniteor iizfinite medium",
    isMain: false,
  },
  {
    title: "4. DESIGN OF A 200KEV HIGH PULSE CURRENT ELECTRON BEAM",
    image:
      "Electron-beam-accelerator-and-detail-of-the-irradiation-process.png",
    description:
      "In the paper, design of a 200keV high pulse current electron beam facility is introduced. Physical parameters of the beam have been selected to satisfy the plasma experiment’s need. LaB 6 has been used as cathode material for its desirable qualities.",
    isMain: false,
  },
  {
    title: "5. E-Beam Sterilization Medical Devices",
    image: "19042391.jpg",
    description:
      "Located close to the major logistics hub of Leipzig and right next to the A9 in Bitterfeld-Wolfen, Herotron E-Beam Service GmbH was founded in 2003 as a provider of irradiation services. At its modern premises, Herotron operates two high-performance accelerators with different energies of 10 MeV and 20 MeV.",
    isMain: false,
  },
  {
    title:
      "6. Electron Beam Technology for Industrial Accelerators & Its Applications",
    image: "REDURA.JPG",
    description:
      "Jhunsons Chemicals Pvt. Ltd. was incorporated on 7th September, 1992 under the Indian Companies Act 1956. The company which started from the scratch in the business of food irradiation, has today emerged as a fully automatic and continuous Gamma Irradiation and sterilization facility in India.",
    isMain: false,
  },
  {
    title: "7. Questions and Answers",
    image: "FAQ.JPG",
    description:
      "Looking for authoritative answers to your questions concerning food irradiation? This information may help. These are relatively short answers to complex questions and more detailed information is available upon request.",
    isMain: false,
  },
];

const eventData = [
  {
    title: "Events",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    title: "Advisors",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    tags: ["tag1", "tag2", "tag3"],
  },
];

interface ContentProps {
  title: string;
  image: string;
  description: string;
  isMain?: boolean;
}

interface EventProps {
  title: string;
  description: string;
  tags: string[];
}

const EventCard = ({ title, description, tags }: EventProps) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl bg-green-400 p-2 font-semibold">{title}</h1>
      <div className="shadow-xl p-6">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"></div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          Shooting Stars
        </h2>
        <p className="leading-relaxed text-base">{description}</p>
      </div>
    </div>
  );
};

const ContentComponent = (item: ContentProps) => {
  return (
    <div className={`p-4 ${item.isMain ? `md:w-1/2` : `md:w-1/3`}`}>
      <div className="h-full shadow-xl overflow-hidden">
        <img
          className="md:h-64 w-full object-contain object-center"
          src={`./assets/${item.image}`}
          alt="blog"
        />
        <div className="p-6">
          <h1 className="text-lg font-medium mb-3">{item.title}</h1>
          <p className="leading-relaxed mb-3">{item.description}</p>

          <Link
            href={{
              pathname: item.title.replace(/\s/g, "").toLowerCase(),
              query: item as any,
            }}
            className="cursor-pointer text-green-500 inline-flex items-center md:mb-2 lg:mb-0"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export function ContentPaper() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row p-4">
        {mockData
          .filter((item) => item.isMain)
          .map((item, index) => (
            <ContentComponent
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
              isMain={item.isMain}
            />
          ))}
        <div className="w-full md:w-1/2 flex flex-col">
          {eventData.map((item, index) => (
            <EventCard
              key={index}
              title={item.title}
              description={item.description}
              tags={item.tags}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap -m-4 p-4">
        {mockData
          .filter((item) => !item.isMain)
          .map((item, index) => (
            <ContentComponent
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
              isMain={item.isMain}
            />
          ))}
      </div>
    </div>
  );
}

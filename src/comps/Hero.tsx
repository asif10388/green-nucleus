import { Carousel } from "@mantine/carousel";
import { ArrowLeft, ArrowRight } from "react-feather";

const data = [
  {
    title: "The Green Nucleus",
    description: "The Green Nucleus",
    image:
      "./assets/Electron-beam-accelerator-and-detail-of-the-irradiation-process.png",
  },
  {
    title: "The Green Nucleus",
    description: "The Green Nucleus",
    image: "./assets/scan_system01.jpg",
  },
  {
    title: "The Green Nucleus",
    description: "The Green Nucleus",
    image: "./assets/19042391.jpg",
  },
];

const Hero = () => {
  return (
    <div className="max-w-screen md:h-screen flex">
      <Carousel
        sx={{ flex: 1 }}
        mx="auto"
        height="100%"
        withIndicators
        controlsOffset="xl"
        nextControlIcon={<ArrowRight className="w-16 h-16" />}
        previousControlIcon={<ArrowLeft className="w-16 h-16" />}
        styles={{
          control: {
            border: 0,
            boxShadow: "none",
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}
      >
        {data.map((item, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center justify-center  after:content-['\A'] after:bg-black after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-30">
              <img
                src={item.image}
                alt={item.title}
                className="h-full object-contain object-center"
              />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;

import { Carousel } from "@mantine/carousel";
import { ArrowLeft, ArrowRight } from "react-feather";

const data = [
  {
    title: "The Green Nucleus",
    description: "The Green Nucleus",
    image: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45",
  },
  {
    title: "The Green Nucleus",
    description: "The Green Nucleus",
    image: "https://images.unsplash.com/photo-1673659918897-5b5efac8b52d",
  },
  {
    title: "The Green Nucleus",
    description: "The Green Nucleus",
    image: "https://images.unsplash.com/photo-1673753484869-eb82dcb145e5",
  },
];

const Hero = () => {
  return (
    <div className="max-w-screen h-screen flex">
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
            <div className="flex flex-col items-center justify-center">
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

import SliderOne from "@/public/images/trendingOne.png";

export const carouselData = [
  {
    image: SliderOne,
    title: "Clan Chief Application",
    description: "Become a leader, earn rewards, and build your own clan.",
    link: "/college-titan",
    linkText: "Join",
  },
  {
    image: SliderOne,
    title: "Complete Quests",
    description: "Complete Web3 quests and win big rewards.",
    link: "/quests",
    linkText: "Play Now",
  },
  {
    image: SliderOne,
    title: "Live Tournaments",
    description:
      "Win prizes upto 25L for the Bangalore Web3 Championship Tournament.",
    link: "/tournaments",
    linkText: "Compete",
  },  
  {
    image: SliderOne,
    title: "Explore Games",
    description: "Explore exciting games featured by IndiGG.",
    link: "/games",
    linkText: "Explore",
  },
  {
    image: SliderOne,
    title: "Live Tournaments",
    description:
      "Win prizes upto 25L for the Bangalore Web3 Championship Tournament.",
    link: "/tournaments",
    linkText: "Compete",
  },  
  {
    image: SliderOne,
    title: "Explore Games",
    description: "Explore exciting games featured by IndiGG.",
    link: "/games",
    linkText: "Explore",
  },
];

export const settings = {
  className: "slider variable-width",
  dots: false,
  infinite: false,
  slidesToShow: 4,
  centerPadding: "60px",
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        slidesToScroll: 1,
      },
    },
  ],
};

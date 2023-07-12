import SliderOne from "@/public/images/trendingOne.png";
import SliderTwo from "@/public/images/trendingTwo.png";
import SliderThree from "@/public/images/trendingThree.png";
import SliderFour from "@/public/images/trendingFour.png";

import SliderOneIcon from "@/public/images/trendingOneIcon.png";
import SliderTwoIcon from "@/public/images/trendingTwoIcon.png";
import SliderThreeIcon from "@/public/images/trendingThreeIcon.png";
import SliderFourIcon from "@/public/images/trendingFourIcon.png";

export const carouselData = [
  {
    image: SliderOne,
    logo: SliderOneIcon,
    title: "Ready Players",
    name: "@dicar",
    price: "$232,102",
    ethName: "Stretch Of Time",
    ethValue: "0.045 ETH",
  },
  {
    image: SliderTwo,
    logo: SliderTwoIcon,
    title: "Dragon’s Den",
    name: "@astroo2",
    price: "$172,023",
    ethName: "Arcade Land",
    ethValue: "0.045 ETH",
  },
  {
    image: SliderThree,
    logo: SliderThreeIcon,
    title: "Crippled World",
    name: "@micle",
    price: "$92,002",
    ethName: "Shinsekai Portal",
    ethValue: "0.045 ETH",
  },  
  {
    image: SliderFour,
    logo: SliderFourIcon,
    title: "Crippled World",
    name: "@11 eror D.",
    price: "$88,024",
    ethName: "Paper Cut",
    ethValue: "0.045 ETH",
  },
  {
    image: SliderOne,
    logo: SliderOneIcon,
    title: "Ready Players",
    name: "@dicar",
    price: "$232,102",
    ethName: "Stretch Of Time",
    ethValue: "0.045 ETH",
  },  
  {
    image: SliderTwo,
    logo: SliderTwoIcon,
    title: "Ready Players",
    name: "@dicar",
    price: "$232,102",
    ethName: "Stretch Of Time",
    ethValue: "0.045 ETH",
  },
];

export const settings = {
  className: "slider",
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3.4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2.6,
        slidesToScroll: 1,
      },
    },
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
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 678,
      settings: {
        slidesToShow: 1.4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

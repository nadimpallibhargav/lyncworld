import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { carouselData, settings } from "@/data/trending";
import styles from "./Trending.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trending = () => {
  return (
    <div className={styles.trendingContainer}>
      <Slider {...settings}>
        {carouselData.map((carousel, i) => {
          return (
            <div key={i} className={styles.trendingCard}>
              <Image src={carousel.image} alt="image" />
              <div className={styles.trendingCardHeading}>
                <h3>{carousel.title}</h3>
                <Link href="/">
                  <Image
                    src="/images/favouriteVector.png"
                    width={16}
                    height={14}
                    alt="image"
                  />
                </Link>
              </div>
              <div className={styles.trendingCardContent}>
                <Image
                  src={carousel.logo}
                  width={60}
                  height={60}
                  alt="image"
                />
                <div className={styles.profileDetails}>
                  <div className={styles.profileName}>
                    <h3>{carousel.name}</h3>
                    <Image
                      src="/images/verifiedIcon.svg"
                      width={17}
                      height={17}
                      alt="image"
                    />
                  </div>
                  <p>{carousel.price}</p>
                </div>
                <div className={styles.profileEth}>
                  <h3>{carousel.ethName}</h3>
                  <p>{carousel.ethValue}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Trending;

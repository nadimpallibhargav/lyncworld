import Slider from "react-slick";
import Image from "next/image";
import styles from "./Trending.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData, settings } from "@/data/trending";
import Link from "next/link";

const Trending = () => {
  return (
    <div className={styles.trending}>
      <div className={styles.trendingHeading}>
        <div className={styles.trendingFilter}>
          <button className={styles.activeFilter}>Trending</button>
          <button>Top</button>
        </div>
      </div>
      <div className={styles.trendingContainer}>
        <Slider {...settings}>
          {carouselData.map((carousel, i) => {
            return (
              <div key={i} className={styles.trendingCard}>
                <Image src={carousel.image} alt="image" />
                <div className={styles.trendingCardHeading}>
                  <h3>Ready Players</h3>
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
                    src="/images/trendingNftLogo.png"
                    width={60}
                    height={60}
                    alt="image"
                  />
                  <div className={styles.profileDetails}>
                    <div className={styles.profileName}>
                      <h3>@dicar</h3>
                      <Image
                        src="/images/verifiedIcon.svg"
                        width={17}
                        height={17}
                        alt="image"
                      />
                    </div>
                    <p>$232,102</p>
                  </div>
                  <div className={styles.profileEth}>
                    <h3>Stretch Of Time</h3>
                    <p>0.045 ETH</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Trending;

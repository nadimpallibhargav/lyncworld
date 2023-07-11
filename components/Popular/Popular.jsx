import Link from "next/link";
import Image from "next/image";
import PopularCard from "../PopularCard/PopularCard";
import styles from "./Popular.module.scss";

const Popular = () => {
  return (
    <div className={styles.popular}>
      <div className="headingViewMore">
        <h2>Popular NFT’s Live Auction</h2>
        <Link href="/">
          <span>Show More</span>
          <Image
            src="/images/downArrowBlue.svg"
            width={24}
            height={24}
            alt="image"
          />
        </Link>
      </div>
      <div className={styles.popularCardsWrapper}>
        <PopularCard />
        <PopularCard />
      </div>
    </div>
  );
};

export default Popular;

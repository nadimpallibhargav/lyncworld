import Image from "next/image";
import styles from "./PopularCard.module.scss";

const PopularCard = () => {
  return (
    <div className={styles.popularNftCard}>
      <Image priority
        className={styles.popularNftCardImage}
        src="/images/popularCardOne.png"
        width={455}
        height={305}
        alt="image"
      />
      <div className={styles.popularNftContent}>
        <div className={styles.popularNftDetails}>
          <div className={styles.timerWrapper}>
            <div className={styles.timerText}>
              <div className={styles.timerHeading}>
                <div className={styles.timerIconWrapper}>
                  <Image
                    src="/images/timer.svg"
                    width={9}
                    height={20}
                    alt="image"
                  />
                </div>
                <h3>18h : 17m : 29s</h3>
              </div>
              <div className={styles.timerHeading}>
                <div className={styles.timerIconWrapper}>
                  &nbsp;
                </div>
                <p>Time Remaining</p>
              </div>
            </div>
          </div>
          <div className={styles.ethWrapper}>
            <div className="timerText">
              <h3>17.53 ETH</h3>
              <p>Highest Bid</p>
            </div>
          </div>
        </div>
        <button className={styles.popularNftBtn}>Place A Bid</button>
      </div>
    </div>
  );
};

export default PopularCard;

import Link from "next/link";
import Image from "next/image";
import styles from "./Wallet.module.scss";

const Wallet = () => {
  return (
    <div className={styles.wallet}>
      <div className={["headingViewMore", styles.headingViewMore].join(" ")}>
        <h2>Wallet</h2>
        <Link href="/">
          <span>Show More</span>
          <Image
            src="/images/downArrowBlue.svg"
            width={16}
            height={8}
            alt="image"
          />
        </Link>
      </div>
      <div className={styles.walletCard}>
        <h3>Your Balance</h3>
        <h4>
          <span>ETH</span> 21.533.10
        </h4>
        <div className={styles.ethWrapper}>
          <Image
            src="/images/walletEth.svg"
            width={27}
            height={27}
            alt="image"
          />
          <p>
            <span>Ethereum</span> ETH
          </p>
          <Image
            src="/images/walletCardDownArrow.svg"
            width={12}
            height={8}
            alt="image"
          />
        </div>
        <div className={styles.graphContent}>
          <div
            className={[styles.graphDetails, styles.earningsGraph].join(" ")}
          >
            <div className={styles.graphHeading}>
              <div className={styles.graphIcon}>
                <Image
                  src="/images/earningsIcon.svg"
                  width={16}
                  height={16}
                  alt="image"
                />
              </div>
              <p>Earnings</p>
            </div>
            <div className={styles.graphWrapper}>
              <h5>
                <span className={styles.earningsValue}>7.048 </span>{" "}
                <span> ETH</span>
              </h5>
              <Image
                src="/images/earningsGraph.png"
                width={165}
                height={96}
                alt="image"
              />
            </div>
          </div>
          <div
            className={[styles.graphDetails, styles.spendingsGraph].join(" ")}
          >
            <div className={styles.graphHeading}>
              <div className={styles.graphIcon}>
                <Image
                  src="/images/spendingsIcon.svg"
                  width={16}
                  height={16}
                  alt="image"
                />
              </div>
              <p>Spendings</p>
            </div>
            <div className={styles.graphWrapper}>
              <h5>
                <span className={styles.spendingsValue}>2.013 </span>
                <span> ETH</span>
              </h5>
              <Image
                src="/images/spendingsGraph.png"
                width={165}
                height={96}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

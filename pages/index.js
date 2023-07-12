import Head from "next/head";
import SideNav from "@/components/SideNav/SideNav";
import Header from "@/components/Header/Header";
import Popular from "@/components/Popular/Popular";
import Wallet from "@/components/Wallet/Wallet";
import styles from "@/styles/Home.module.scss";
import Trending from "@/components/Trending/Trending";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="LYNC provides a scalable infrastructure for launching web3 games without hampering the experience of gaming."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="container">
        <div className={styles.layoutWrapper}>
          <div className={styles.sideNavWrapper}>
            <SideNav />
          </div>
          <div className={styles.mainContentWrapper}>
            <Header />
            <main>
              <section>
                <div className={styles.popularSectionWrapper}>
                  <Popular />
                  <Wallet />
                </div>
              </section>
              <section className={styles.trendingSection}>
                <div className={styles.trending}>
                  <div className={styles.trendingTitle}>
                    <div className={styles.trendingHeading}>
                      <div className={styles.trendingFilter}>
                        <div className={styles.buttonsWrapper}>
                          <button className={styles.activeFilter}>
                            <span>Trending</span>
                          </button>
                          <button>
                            <span>Top</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Trending />
              </section>
              <section className={styles.weeklyPopular}>
                <div className={styles.weeklyPopularHeading}>
                  <h2>Last 7 days popular search</h2>
                  <div className={styles.filters}>
                    <button className={styles.filterActive}>All</button>
                    <button>Music</button>
                    <button>3D Abstract</button>
                    <button>Game</button>
                    <button>Sprots</button>
                    <button>Cartoon</button>
                    <button>Virtual World</button>
                    <button>Classic</button>
                  </div>
                </div>
                <Trending />
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

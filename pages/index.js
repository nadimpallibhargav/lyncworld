import Head from "next/head";
import SideNav from "@/components/SideNav/SideNav";
import Header from "@/components/Header/Header";
import Popular from "@/components/Popular/Popular";
import styles from "@/styles/Home.module.scss";

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
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import styles from "./SideNav.module.scss";
import Link from "next/link";
import SideNavButton from "../SideNavButton/SideNavButton";

const SideNav = () => {
  return (
    <div className={styles.sideNav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/images/logo.svg" width={57} height={60} alt="logo" />
        </Link>
      </div>
      <ul className={styles.sideNavList}>
        <li>
          <SideNavButton
            url={"/"}
            src={"/images/homeIcon.svg"}
            width={24}
            height={24}
            alt={"image"}
            active={true}
          />
        </li>
        <li>
          <SideNavButton
            url={"/"}
            src={"/images/messageIcon.svg"}
            width={24}
            height={24}
            alt={"image"}
          />
        </li>
        <li>
          <SideNavButton
            url={"/"}
            src={"/images/buyIcon.svg"}
            width={24}
            height={24}
            alt={"image"}
          />
        </li>
        <li>
          <SideNavButton
            url={"/"}
            src={"/images/activityIcon.svg"}
            width={24}
            height={24}
            alt={"image"}
          />
        </li>
        <li>
          <SideNavButton
            url={"/"}
            src={"/images/timeIcon.svg"}
            width={24}
            height={24}
            alt={"image"}
          />
        </li>
      </ul>
      <hr />
      <ul className={styles.sideNavList}>
        <li>
          <SideNavButton
            url={"/"}
            src={"/images/walletIcon.svg"}
            width={24}
            height={24}
            alt={"image"}
          />
        </li>
        <li>
          <SideNavButton
            url={"/"}
            src={"/images/friendsIcon.svg"}
            width={24}
            height={24}
            alt={"image"}
          />
        </li>
        <li>
          <SideNavButton
            url={"/"}
            src={"/images/settingsIcon.svg"}
            width={24}
            height={24}
            alt={"image"}
          />
        </li>
        <li>
          <SideNavButton
            url={"/"}
            src={"/images/logoutIcon.svg"}
            width={24}
            height={24}
            alt={"image"}
          />
        </li>
      </ul>
    </div>
  );
};

export default SideNav;

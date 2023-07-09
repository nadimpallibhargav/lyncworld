import Link from "next/link";
import Image from "next/image";
import styles from "./SideNavButton.module.scss";

const SideNavButton = ({ url, src, width, height, alt, active }) => {
  return (
    <Link
      href={url}
      className={
        active
          ? [styles.sideNavButton, styles.active].join(" ")
          : styles.sideNavButton
      }
    >
      <Image src={src} width={width} height={height} alt={alt} />
    </Link>
  );
};

export default SideNavButton;

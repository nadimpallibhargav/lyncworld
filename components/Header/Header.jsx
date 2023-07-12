import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InputSearch from "../InputSearch/InputSearch";
import styles from "./Header.module.scss";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add("menu-open");
      document.body.classList.add("menu-open");
    } else {
      document.documentElement.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.Header}>
      <nav>
        <InputSearch />
        <ul className={isMenuOpen ? [styles.menu, styles.open].join(' ') : styles.menu}>
          <li>
            <Link
              href=""
              className={[styles.navLinks, styles.ethLink].join(" ")}
            >
              <Image
                src="/images/ethIcon.svg"
                alt="image"
                width={16}
                height={16}
              />
              <b>3,25 ET</b>
            </Link>
          </li>
          <li>
            <Link
              href=""
              className={[styles.navLinks, styles.notificationLink].join(" ")}
            >
              <Image
                src="/images/notificationIcon.svg"
                alt="image"
                width={32}
                height={32}
              />
            </Link>
          </li>
          <li>
            <Link
              href=""
              className={[styles.navLinks, styles.createLink].join(" ")}
            >
              Create
            </Link>
          </li>
          <li>
            <Link
              href=""
              className={[styles.navLinks, styles.createLink].join(" ")}
            >
              Collect
            </Link>
          </li>
        </ul>
        <span className={styles.profileWrapper}>
          <Image src="/images/profile.svg" width={56} height={56} alt="image" />
          <span className={styles.profileName}>
            <b>Sandeep kumar</b>
            <span>sandeepkumar@gmail.com</span>
          </span>
          <Image
            src="/images/downArrowIcon.svg"
            width={24}
            height={24}
            alt="image"
          />
        </span>
        <div
          className={isMenuOpen ? [styles.menuToggle, styles.open].join(' ') : styles.menuToggle}
          onClick={toggleMenu}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

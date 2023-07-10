import Image from "next/image";
import styles from "./InputSearch.module.scss";

const InputSearch = () => {
  return (
    <span className={styles.searchWrapper}>
      <button>
        <Image src='/images/search.svg' width={24} height={24} alt="image" />
      </button>
      <input type="text" placeholder="Search by creator or collection" />
    </span>
  );
};

export default InputSearch;

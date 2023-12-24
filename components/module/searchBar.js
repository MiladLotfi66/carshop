// import { useState } from "react";
// import { useRouter } from "next/router";
import styles from "./SearchBar.module.css";
function SearchBar() {
  //   const router = useRouter();

  //   const [min, setMin] = useState("");
  //   const [max, setMax] = useState("");

  //   const searchHandler = () => {
  //     if (min && max) {
  //       router.push(`/filter/${min}/${max}`);
  //     } else {
  //       alert("Please Enter minimum and maximum price!");
  //     }
  //   };

  return (
    <div className={styles.container}>
      <div>
        <input placeholder="Inter min-price" />
        <input placeholder="Inter max-price" />
      </div>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;

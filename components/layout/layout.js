import Link from "next/link";
import style from "./layout.module.css";
function layout({ children }) {
  return (
    <div>
      <header className={style.header}>
        <Link href={"/"}>
        <h2>signalcar</h2>
        <p>choese and buy your car </p>
        </Link>
      </header>
      <div className={style.container}>{children}</div>
      <footer className={style.footer}>this project maked by next.js by <a href="https://www.signalmobile.ir" target="_blank">milad lotfi</a> &copy;</footer>
    </div>
  );
}

export default layout;

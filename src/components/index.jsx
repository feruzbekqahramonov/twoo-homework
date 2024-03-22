import logo from "../assets/site logo.png";
import styles from "./index.module.css";

function Card() {
  return (
    <>
      <div className={styles.hader}>
        <div className={styles.logo}>
          <img src={logo} alt="site logo" />
        </div>
        <div className={styles.about}>
          <a className={styles.url} href="#">Home</a>
          <a className={styles.url} href="#">About us </a>
          <a className={styles.url} href="#">How it works </a>
          <a className={styles.url} href="#">Services</a>
          <a className={styles.url} href="#">Contact</a>
          <button className={styles.button}>Try for Free</button>
        </div>
      </div>
      <div className={styles.hero}>
        <h1>Discover new <br /> currency</h1>
        <p>A cryptocurrency bank account for more trusting <br /> financial transaction & more reliable currency for <br /> better future finance</p>
        <button className={styles.mainbtn}>Try for Free</button>
      </div>
    </>
  );
}

export default Card;

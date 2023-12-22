import styles from "./card.module.css";
import Location from "../icons/Location"
function Card(props) {
  const { id, name, model, year, distance, location, image, price } = props;
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <h4 className={styles.title}>{`${name} ${model}`}</h4>
      <p className={styles.detail}>{`${year} . ${distance}`}</p>
      <div className={styles.footer}>
        <p> $ {price}</p>
        <div className={styles.location}>
          <p>{location}</p>
          <Location/>
        </div>
      </div>
    </div>
  );
}

export default Card;

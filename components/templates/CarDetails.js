import styles from "./carDetails.module.css";
import Company from "../icons/Company";
import Road from "../icons/Road";
import Location from "../icons/Location";
import Calender from "../icons/Calender";
import Money from "../icons/Money";
import Model from "../icons/Model";
function carDetails(props) {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    image,
    price,
    description,
  } = props;

  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <h3 className={styles.header}>
        {name} {model}
      </h3>
      <div className={styles.details}>
        <div>
          <Company />
          <p>Company</p>
          <span>{name}</span>
        </div>
        <div>
          <Model />
          <p>Model</p>
          <span>{model}</span>
        </div>
        <div>
          <Calender />
          <p>first registeration</p>
          <span>{year}</span>
        </div>
        <div>
          <Road />
          <p>Road</p>
          <span>{distance}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <Location />
          <p>location</p>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <p>extera information</p>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <Money />
          <p>Price:</p>
          <span>${price}</span>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  );
}

export default carDetails;

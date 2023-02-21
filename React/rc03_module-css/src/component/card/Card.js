import Buton from "../buton/Buton";
import CardSytle from "./Card.module.css";
const Card = ({ lang, img, btn }) => {
  return (
    <div className="card">
      <h1 className={CardSytle.title}>{lang}</h1>
      <img className={CardSytle.images} src={img} alt="img" />

      <Buton btn={btn} />
    </div>
  );
};

export default Card;

import "../../styles/card.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../../images/cardButton.svg";

function Card(props) {
  const {
    storyBorder,
    image,
    hours,
  } = props;

  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <div className="timePosted">{hours} HOURS AGO</div>
    </div>
  );
}

export default Card;
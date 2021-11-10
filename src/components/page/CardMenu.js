import "../../styles/cardMenu.scss";
import { ReactComponent as Notifications } from "../../images/notifications.svg";

function CardMenu() {
  return (
    <div className="cardMenu">
      <div className="interactions">
        <Notifications className="icon" />
      </div>
    </div>
  );
}

export default CardMenu;
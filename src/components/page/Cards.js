import "../../styles/cards.scss";
import Card from "./Card";

function Cards() {

  return (
    <div className="cards">
      <Card
        accountName="rafagrassetti"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        hours={16}
      />
      <Card
        accountName="mapvault"
        image="https://picsum.photos/800"
        hours={12}
      />
      <Card
        accountName="dadatlacak"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        hours={4}
      />
    </div>
  );
}

export default Cards;
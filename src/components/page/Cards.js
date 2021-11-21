import "../../styles/cards.scss";
import Card from "./Card";

function Cards() {

  const imgs = fetch("https://api.cloudinary.com/v1_1/postalot/image/upload", {
    body: JSON.stringify({
      file: '',
      upload_preset: 'kaozqusa',
      cloud_name: 'postalot',
    })
  })
  .then(res => res.json())
  .then(data => {console.log(data)})
  .catch(err => {console.log(`Failed to retrieve image: ${err}`)});

  return (
    <div className="cards">
      <Card
        accountName="rafagrassetti"
        storyBorder={true}
        image={'https://res.cloudinary.com/postalot/image/upload/v1637427698/uhz8bhpgo5kpt84bzckv.jpg'}
        hours={new Date().getHours()}
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
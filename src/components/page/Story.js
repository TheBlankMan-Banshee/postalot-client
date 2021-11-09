import "../../styles/Story.scss";
import ProfileIcon from "../menu/ProfileIcon";
import users from "../../users"; // remove when using a DB

function Story() {
    let accountName = users[Math.floor(Math.random() * users.length)].username;

    if (accountName.length > 10) {
        accountName = accountName.substring(0,10)+"...";
    }

    return (
        <div className="story">
            <ProfileIcon iconSize="big" storyBorder={true}/>
            <span className="accountName">{accountName}</span>
        </div>
    ) 
}

export default Story;
import "../../styles/Menu.scss";
import {ReactComponent as Home} from "../../images/home.svg";
import {ReactComponent as Message} from "../../images/message.svg";
import {ReactComponent as Explore} from "../../images/explore.svg";
import {ReactComponent as NewPost} from "../../images/new.svg";
import {ReactComponent as Like} from "../../images/like.svg";
import ProfileIcon from "./ProfileIcon";
import image from "../../images/postalot_icon.png";
import Cookies from "universal-cookie";

function Menu(props) {
    const onSignOut = (e) => {
        e.preventDefault();
        let uniCookie = new Cookies();
        uniCookie.remove('user',{path:'/'});
        props.onRouteChange('signIn');
    }

    return (
        <div className="menu">
            <Home className="icon"/>
            <Message className="icon"/>
            <Explore className="icon"/>
            <NewPost className="icon"/>
            <Like className="icon"/>
            <ProfileIcon iconSize="small" image={image} storyBorder={true}/>
            <span onClick={(e) => onSignOut(e)}>SIGN OUT</span>
        </div>
    )
}

export default Menu;
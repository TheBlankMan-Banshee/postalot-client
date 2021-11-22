import '../../styles/NavBar.scss';
import logo from "../../images/postalot_icon.png";
import searchIcon from "../../images/search_icon.png"
import Menu from "../menu/Menu";

function NavBar(props) {
    return (
        <div className="navigation">
            <div className="container">
                <img className="logo" src={logo} alt="Postalot.png"/>
                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="Search.png"/>
                    <span className="searchText">Search</span>
                </div>
                <Menu onRouteChange={props.onRouteChange}/>
            </div>
        </div>
    )
}

export default NavBar;
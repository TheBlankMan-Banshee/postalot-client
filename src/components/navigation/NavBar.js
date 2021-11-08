import '../../styles/NavBar.scss';
import logo from "../../images/logo.png";
import searchIcon from "../../images/search_icon.png"
import Menu from "../menu/Menu";

function NavBar() {
    return (
        <div className="navigation">
            <div className="container">
                <img className="logo" src={logo} alt="Postalot.png"/>
                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="Search.png"/>
                </div>
                <span className="searchText">Search</span>
            </div>
            <Menu/>
        </div>
    )
}

export default NavBar;
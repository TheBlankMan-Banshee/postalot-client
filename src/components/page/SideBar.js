import "../../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "../page/Profile";
import Footer from "../page/Footer";
import image from "../../images/postalot_icon.png";

function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="PleaBanshee"
          caption="Llewellyn Anthony"
          urlText="Change"
          iconSize="big"
          image={image}
        />
        <Footer />
      </div>
    </Sticky>
  );
}

export default Sidebar;
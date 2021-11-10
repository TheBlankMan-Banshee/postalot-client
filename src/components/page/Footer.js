import "../../styles/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <ul className="links">
        <li>About</li>
        <li>Help</li>
        <li>API</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Language</li>
      </ul>
      <div className="copyright">@ {`${new Date().getFullYear()}`} POSTALOT FROM THE BLANKBANSHEE</div>
    </div>
  );
}

export default Footer;
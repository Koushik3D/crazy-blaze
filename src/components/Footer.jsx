import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p className="text-lg font-medium">
          Copyright © 2024 - All Rights Reserved by {" "}
          <Link className="font-bold hover:text-primary" to="/">
            CrazyBlaze
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./styles.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      ML Resources &#169;{new Date().getFullYear()}, License: &nbsp;
      <a
        href="https://github.com/Parasgupta44/ml-resources-react/blob/master/LICENSE.txt"
        target="blank"
        rel="noreferrer"
      >
        MIT
      </a>
    </footer>
  );
};

export default Footer;

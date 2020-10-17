import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      ML Resources &#169;{new Date().getFullYear()}, License: &nbsp;
      <a
        href="https://github.com/Parasgupta44/ml-resources-react/blob/master/LICENSE.txt"
        target="blank"
        rel="noreferrer"
      >
        MIT
      </a>
    </div>
  );
};

export default Footer;

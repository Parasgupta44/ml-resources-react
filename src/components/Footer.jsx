import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      ML Resources&#169;{new Date().getFullYear()}. You can use it freely,
      respecting the terms included in the &nbsp;
      <a
        href="https://github.com/Parasgupta44/ml-resources-react/blob/master/LICENSE.txt"
        target="blank"
      >
        license file
      </a>
    </div>
  );
}

import React from "react";
import unshuffledResources from "../ml_resources.json";
import { useState } from "react";
import MouseTooltip from "react-sticky-mouse-tooltip";
import { ReactTinyLink } from "react-tiny-link";

function shuffle(ogArr) {
  // Do cloning to prevent mutation
  const arr = [...ogArr];
  for (let i = arr.length - 1; i > 0; i--) {
    const newI = Math.floor(Math.random() * (i + 1));
    const tempValue = arr[newI];
    arr[newI] = arr[i];
    arr[i] = tempValue;
  }
  return arr;
}

const resources = shuffle(unshuffledResources);

const Display = () => {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  var hover_preview = "";
  if (url !== "") {
    console.log(url);
    hover_preview = (
      <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url={url}
        onError={(e) => console.log(e)}
      />
    );
  }
  return (
    <div>
      <div className="json head-title">
        <div>
          <h1>
            <span>ML Resources</span>
          </h1>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(event, value) => setSearch(event.target.value)}
          />
        </div>
      </div>
      <dl className="json">
        {resources
          .filter(
            (resource) =>
              resource.link.toLowerCase().includes(search.toLowerCase()) ||
              resource.description
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              resource.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((resource, index) => {
            return (
              <div
                className="bxstyle"
                key={resource.id}
                onMouseLeave={() => setUrl("")}
                onMouseEnter={() => setUrl(resource.link)}
                onClick={() => window.open(resource.link, "_blank")}
              >
                <dt>
                  <span
                    className="title"
                    role="img"
                    aria-label={resource.title}
                  >
                    {resource.title}
                  </span>
                </dt>
                <hr />
                <dd>
                  <span className="describe">{resource.description}</span>
                </dd>
                <hr />
                <ul>
                  <p> Tags: </p>
                  {resource.tags.map(item =>
                    <li>{item}</li>
                  )}
                </ul>
              </div>
            );
          })}
      </dl>
      <MouseTooltip visible={url !== ""} offsetX={15} offsetY={10}>
        {hover_preview}
      </MouseTooltip>
    </div>
  );
};

export default Display;

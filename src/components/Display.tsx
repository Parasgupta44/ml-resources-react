import React, { useState } from "react";
import MouseTooltip from "react-sticky-mouse-tooltip";
import { ReactTinyLink } from "react-tiny-link";
import unshuffledResources from "../ml_resources.json";

function shuffle<T>(ogArr: Array<T>): Array<T> {
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

const Display: React.FC = () => {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");

  console.log(url);

  const hoverPreview = url ? (
    <ReactTinyLink
      cardSize="small"
      showGraphic={true}
      maxLine={2}
      minLine={1}
      url={url}
      onError={(e: Error) => console.log(e)}
    />
  ) : null;

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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(event.target.value)
            }
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
              resource.title.toLowerCase().includes(search.toLowerCase()) ||
              resource.tags
                .join(" ")
                .toLowerCase()
                .includes(search.toLowerCase())
          )
          .map((resource) => {
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
                  {resource.tags.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
      </dl>
      <MouseTooltip visible={url !== ""} offsetX={15} offsetY={10}>
        {hoverPreview}
      </MouseTooltip>
    </div>
  );
};

export default Display;

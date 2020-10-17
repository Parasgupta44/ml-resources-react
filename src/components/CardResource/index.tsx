import React from "react";
import { Resource } from "../../types";
import { Tag } from "../Tag";
import "./styles.css";

type Props = {
  resource: Resource;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}

export function CardResource({ resource, setUrl }: Props) {
  return (
    <div
      className="card-resource-container"
      onMouseLeave={() => setUrl("")}
      onMouseEnter={() => setUrl(resource.link)}
      onClick={() => window.open(resource.link, "_blank")}
    >
      <div className="resource-info">
        <h3>{resource.title}</h3>
        <p>{resource.description}</p>
      </div>
      <div className="tag-section">
        <p>Tags:</p>
        <ul className="tag-list">
          {resource.tags.map((item) => (
            <Tag>{item}</Tag>
          ))}
        </ul>
      </div>
    </div>
  );
}

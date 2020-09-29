import React from "react";
import resources from "../ml_resources.json";

const Display = () => {
  return (
    <div>
      <h1>
        <span>ML Resources</span>
      </h1>

      <dl className="json">
        {resources.map((resource, index) => {
          return (
            <div className="bxstyle" key={resource.id}>
              <dt>
                <span className="title" role="img" aria-label={resource.title}>
                  {resource.title}
                </span>
              </dt>
              <dd>
                <span className="describe">{resource.description}</span>
                <br />
                <a
                  href={resource.link}
                  className="anchor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to the resource-{">"}
                </a>
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
};

export default Display;

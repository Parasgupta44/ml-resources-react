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
            <div className="bxstyle" key={resource.id} onClick={() => window.open(resource.link, "_blank")}>
              <dt>
                <span className="title" role="img" aria-label={resource.title}>
                  {resource.title}
                </span>
              </dt>
              <hr />
              <dd>
                <span className="describe">{resource.description}</span>
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
};

export default Display;

import React from "react";
import resources from "../ml_resources.json";
import { useState } from 'react';


const Display = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <h1>
        <span>ML Resources</span>
      </h1>
      <div className="search">
      <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(event,value) => setSearch(event.target.value)}
         />
      </div>
      <dl className="json">
        {resources.filter(
          (resource => resource.link.toLowerCase().includes(search.toLowerCase())||resource.description.toLowerCase().includes(search.toLowerCase())||resource.title.toLowerCase().includes(search.toLowerCase()))
          ).map((resource, index) => {
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

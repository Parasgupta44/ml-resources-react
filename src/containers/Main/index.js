import React from "react";
import unshuffledResources from "../../ml_resources.json";
import { useState } from "react";
import MouseTooltip from "react-sticky-mouse-tooltip";
import { ReactTinyLink } from "react-tiny-link";
import { Header } from "../../components/Header";
import { CardResource } from "../../components/CardResource";
import "./styles.css";

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

const Main = () => {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");

  function getResources() {
    if (!search) {
      return resources;
    }
    return resources.filter(
      (resource) =>
        resource.link.toLowerCase().includes(search.toLowerCase()) ||
        resource.description.toLowerCase().includes(search.toLowerCase()) ||
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.tags.join(" ").toLowerCase().includes(search.toLowerCase())
    );
  }

  let hover_preview = "";

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

  const resourceCards = getResources().map((res) => {
    return <CardResource key={res.id} resource={res} setUrl={setUrl} />;
  });

  return (
    <div>
      <Header searchValue={search} setSearch={setSearch} />
      <div className="resources-container">{resourceCards}</div>
      <MouseTooltip visible={url !== ""} offsetX={15} offsetY={10}>
        {hover_preview}
      </MouseTooltip>
    </div>
  );
};

export default Main;

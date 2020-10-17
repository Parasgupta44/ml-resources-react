import React from "react";
import unshuffledResources from "../../ml_resources.json";
import { useState } from "react";
import MouseTooltip from "react-sticky-mouse-tooltip";
import { ReactTinyLink } from "react-tiny-link";
import { Header } from "../../components/Header";
import { CardResource } from "../../components/CardResource";
import "./styles.css";

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

  const resourceCards = getResources().map((res) => {
    return <CardResource key={res.id} resource={{...res, id: res.id.toString()}} setUrl={setUrl} />;
  });

  return (
    <div>
      <Header searchValue={search} setSearch={setSearch} />
      <div className="resources-container">{resourceCards}</div>
      <MouseTooltip visible={url !== ""} offsetX={15} offsetY={10}>
        {hoverPreview}
      </MouseTooltip>
    </div>
  );
};

export default Main;

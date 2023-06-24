import React from "react";
import "./picture.css";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img alt="" href=" " src={data.src.portrait}></img>
      </div>
      <div className="photographerName">
        <p>{data.photographer}</p>
      </div>
    </div>
  );
};

export default Picture;

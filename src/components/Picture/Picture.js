import React from "react";
import "./picture.css";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img alt="" href=" " src={data.src.portrait}></img>
      </div>
    </div>
  );
};

export default Picture;

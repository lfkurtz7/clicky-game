import React from "react";
import "./style.css";


function ImageCard(props) {
  return (
    <div className="card" onClick={()=>props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
    </div>
  );
}

export default ImageCard;

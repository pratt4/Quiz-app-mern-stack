import React from "react";
import './style.css'

function Card(props) {
  return (
    <div className="card">
      <div className="top1">
        <h2 className="name1">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom1">
        <p className="info1">{props.tel}</p> 
        <p className="info1">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import "../../styles/card.css"

export default function Card() {
  return (
    <div className="card mt-4 ps-0 pe-0 container-fluid">
      <img src="https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg" className="card-img-top" alt="..." />
      <div className="card-body" style={{textAlign: "center"}}>
        <h5 className="card-title" style={{margin: "auto"}} >Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary ms-5 me-5">
          Go somewhere
        </a>
      </div>
      </div>
  );
};

import React from "react";

export default function Jumbotron() {
  return (
    <div className="bg-light mt-4 rounded ps-4 pb-5 pt-2">
      <div className="container-fluid">
        <h1 className="display-5">A Warm Welcome!</h1>
        <p className="col-md-12 fs-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className="btn btn-primary btn-md" type="button">
          Call to action!
        </button>
      </div>
    </div>
  );
}

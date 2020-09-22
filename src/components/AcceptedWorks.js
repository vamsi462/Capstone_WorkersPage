import React from "react";

const AcceptedWorkItems = props => {
  const { cartItem, cartKey } = props;
  const { w} = cartItem;
  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
          <figure className="image is-128x128">
              <img
                src={w.img}
                alt="work"
              />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {w.category}{" "}
              {w.wage}
            </b>
            <div>{w.typeOfWork}</div>
           
          </div>
          <div
            className="media-right"
            onClick={() => props.removeWork(cartKey)}
          >
            <span className="delete is-large"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptedWorkItems;

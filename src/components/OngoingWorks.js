import React, { Fragment } from "react";
import withContext from "../withContext";
import AcceptedWorkItems from "./AcceptedWorks";

const OngoingWorks = props => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});
  return (
    <Fragment>
      <div className="hero ">
        <div className="hero-body container">
          <h4 className="title">My Works</h4>
        </div>
      </div>
      <br />
      <div className="container">
        {cartKeys.length ? (
          <div className="column columns is-multiline">
            {cartKeys.map(key => (
              <AcceptedWorkItems
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeWork={props.context.removeWork}
              />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  onClick={props.context.clearWorks}
                  className="button is-warning "
                >
                  Completed ?
                </button>{" "}
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title has-text-grey-light">Work Completed!</div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default withContext(OngoingWorks);

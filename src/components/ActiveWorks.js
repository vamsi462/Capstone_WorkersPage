import React, { Fragment } from "react";
import WorkItems from "./WorkItems";
import withContext from "../withContext";

const ActiveWorks = props => {
  const { tasks } = props.context;
  return (
    <Fragment>
      <div className="hero">
        <div className="hero-body container">
          <h4 className="title">Workers Can Accept the work here</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {tasks && tasks.length ? (
            tasks.map((w, index) => (
              <WorkItems
                w={w}
                key={index}
                addWork={props.context.addWork}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No Work found!
              </span>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default withContext(ActiveWorks);

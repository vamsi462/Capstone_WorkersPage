import React from "react";
import OngoingWorks from "./OngoingWorks";
import {Link, Switch,Route} from "react-router-dom"


const WorkItems = props => {
  const { w } = props;
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
              {w.category}
            </b>
            <br/>
            <b style={{ textTransform: "capitalize" }}>
           {"Wage:"+ w.price} 
            </b>
            <div>{"Work to be done:"+ w.typeOfWork}</div>

            {w.requiredWorkers> 0 ? (
              <small>{w.requiredWorkers +" Workers needed"}</small>
            ) : (
              <small className="has-text-danger">Work is Over</small>
            )}
            <div className="is-clearfix">
            <a href="/"
                className=" is-la  is-link  is-pulled-right"
                onClick={() =>
                  props.addWork({
                    id: w.category,
                    w,
                    amount: 1
                  })
                }
              >
              <Link to = "/ongoing-works">  Accept Work</Link>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
    
     
  );
};

export default WorkItems;

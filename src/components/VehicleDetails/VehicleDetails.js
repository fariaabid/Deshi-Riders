import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./VehicleDetails.css";

const VehicleDetails = (props) => {
  const { vehicleId, img, vehicleName, vehicleFare, key, seat } = props.vehicle;

  return (
    <div className="my-4 d-flex justify-content-between align-items-center bg-secondary text-white divHeight">
      <div className="col-md-3">
        <img src={img} alt="hotel" className="img-fluid" />
      </div>
      <div className="col-md-2">
        <h5>{vehicleName}</h5>
      </div>
      {/* <div className="col-md-5 icon">
          <img src="../../images/icons/peopleicon.png" alt=""/>
      </div>
      <div className="col-md-1">
        <p>{seat}</p>
      </div> */}
      {/* <div className="col-md-3">
        <div className="row d-flex">
          <div className="col-md-6">
            <img src="../../images/icons/peopleicon.png" alt="" />
          </div>
          <div className="col-md-6">
            <p>{seat}</p>
          </div>
        </div>
      </div> */}
      <div className="col-md-3">
      <h5>Seat:{seat}</h5>
      </div>
      <div className="col-md-4">
        <h5>${vehicleFare}</h5>
      </div>
    </div>
  );
};

export default VehicleDetails;

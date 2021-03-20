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

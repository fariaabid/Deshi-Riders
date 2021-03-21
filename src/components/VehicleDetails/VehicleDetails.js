import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VehicleDetails.css";
import {faUsers} from "@fortawesome/free-solid-svg-icons";

const VehicleDetails = (props) => {
  const { vehicleId, img, vehicleName, vehicleFare, key, seat } = props.vehicle;

  return (
    <div>
      <div className="my-4 d-flex justify-content-between align-items-center bg-secondary text-white divHeight">
        <div className="col-md-3">
          <img src={img} alt="hotel" className="img-fluid" />
        </div>
        <div className="col-md-2">
          <h5>{vehicleName}</h5>
        </div>
        <div className="col-md-3">
          <h5>
            {" "}
            <FontAwesomeIcon icon={faUsers} />
            {seat}
          </h5>
        </div>
        <div className="col-md-4">
          <h5>${vehicleFare}/seat</h5>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;

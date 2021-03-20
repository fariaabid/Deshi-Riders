import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./VehicleDetails.css";
import icon from "../../images/icons/peopleicon.png";

const VehicleDetails = (props) => {
  const { vehicleId, img, vehicleName, vehicleFare, key, seat } = props.vehicle;

  return (
    // <div className="my-5 d-flex justify-content-between align-items-center">
    //     <div className="col-md-5">
    //         <img src={img} alt="hotel" className="img-fluid" />
    //     </div>
    //     <div className="col-md-7 hotel-info">
    //         <h5>{vehicleName}</h5>
    //         <p>{seat}</p>
    //         <p>{vehicleFare}</p>

    //     </div>
    // </div>
    <div className="my-1 d-flex justify-content-between align-items-center bg-secondary">
      <div className="col-md-3">
        <img src={img} alt="hotel" className="img-fluid" />
      </div>
      <div className="col-md-2">
        <h5>{vehicleName}</h5>
      </div>
      <div className="col-md-2">
          <img src="icon" alt=""/>
      </div>
      <div className="col-md-1">
        <p>{seat}</p>
      </div>
      <div className="col-md-4">
        <p>${vehicleFare}</p>
      </div>
    </div>
  );
};

export default VehicleDetails;

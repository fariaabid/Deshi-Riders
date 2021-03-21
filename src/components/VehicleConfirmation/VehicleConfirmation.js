import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import VehicleDetailsFakeData from "../../VehicleDetailsFakeData/VehicleDetails";
import { useParams } from "react-router-dom";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import { UserContext } from "../../App";
import GoogleMap from "../GoogleMap/GoogleMap";
import HeaderWithUserName from "../HeaderWithUserName/HeaderWithUserName";
import {faLevelDownAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VehicleConfirmation = () => {
  // const vehicleDetails = VehicleDetailsFakeData;

  const { id } = useParams();
  const filteredVehicle = VehicleDetailsFakeData.filter(
    (vehicle) => parseInt(vehicle.vehicleId) === parseInt(id)
  );

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Container bg="light">
      <HeaderWithUserName></HeaderWithUserName>
      <Container className="d-flex">
        <div className="col-md-4">
          <ul className="list-unstyled bg-primary p-3 rounded text-light">
            <li className="mb-2 text-center">Mirpur</li>
            <li className="mb-2 text-center">
              <FontAwesomeIcon icon={faLevelDownAlt} />
              <FontAwesomeIcon icon={faLevelDownAlt} />
            </li>
            <li className="mb-2 text-center">Savar</li>
          </ul>
          {filteredVehicle.map((vehicle) => (
            <VehicleDetails
              key={vehicle.key}
              vehicle={vehicle}
            ></VehicleDetails>
          ))}
        </div>
        <div className="col-md-8">
          <GoogleMap></GoogleMap>
        </div>
      </Container>
    </Container>
  );
};

export default VehicleConfirmation;

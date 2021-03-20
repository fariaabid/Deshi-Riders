import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import VehicleDetailsFakeData from '../../VehicleDetailsFakeData/VehicleDetails';
import { useParams } from 'react-router-dom';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import { UserContext } from '../../App';
import GoogleMap from '../GoogleMap/GoogleMap';
import HeaderWithUserName from '../HeaderWithUserName/HeaderWithUserName';

const VehicleConfirmation = () => {
    // const vehicleDetails = VehicleDetailsFakeData;

    const { id } = useParams();
    const filteredVehicle = VehicleDetailsFakeData.filter(vehicle => parseInt(vehicle.vehicleId) === parseInt(id));


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container bg="light">
            <HeaderWithUserName></HeaderWithUserName>
            <Container className="d-flex">
                <div className="col-md-4">
                    {
                        filteredVehicle.map(vehicle => <VehicleDetails key={vehicle.key} vehicle={vehicle}></VehicleDetails>)
                    }
                </div>
                <div className="col-md-8">
                    <GoogleMap></GoogleMap>
                </div>
            </Container>
        </Container>
    );
};

export default VehicleConfirmation;
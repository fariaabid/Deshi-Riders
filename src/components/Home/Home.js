import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import bgImage from '../../images/background.png';
import Header from '../Header/Header';
import './Home.css'
import VehicleTypeFakeData from '../../VehicleTypeFakeData/VehicleType';
import SingleVehicle from '../SingleVehicle/SingleVehicle';


const Home = () => {
    const vehicleType = VehicleTypeFakeData;
    const [vehicle, setVehicle] = useState(vehicleType);

    const [content, setContent] = useState(vehicle[0]);
    const handleVehicleContent = (id) => {
        setContent(vehicle[id]);
    }
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage})` }} className="home">
            <Container>
                <Header></Header>
                <Row>
                    <div className="d-flex justify-content-center align-items-center px-1">
                        
                        <div className="col-md-12 slide">
                            <div className="row">
                                {
                                    vehicle.map(vehicle =>
                                        <SingleVehicle vehicle={vehicle} key={vehicle.id} handleVehicleContent={handleVehicleContent}></SingleVehicle>)
                                }
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
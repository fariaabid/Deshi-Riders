import React from 'react';
import { Link } from 'react-router-dom';
import './SingleVehicle.css'

const SingleVehicle = (props) => {
    const { vehicleName, img, id } = props.vehicle;
    // console.log(props);
    return (
        <div className="single-vehicle ">
            <Link to={`/vehicleSearching/${id}`} onClick={() =>{props.handleVehicleContent(props.id)}}>
                <img src={img} alt="" />
                <h3 className="vehicle-name ml-4">{vehicleName}</h3>
            </Link>
        </div>
    );
};

export default SingleVehicle;
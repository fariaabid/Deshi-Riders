import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import { useHistory, useParams } from 'react-router-dom';
import VehicleTypeFakeData from '../../VehicleTypeFakeData/VehicleType';
import './VehicleSearching.css'
import { useForm } from 'react-hook-form';
import VehicleConfirmation from '../VehicleConfirmation/VehicleConfirmation';
import HeaderWithUserName from '../HeaderWithUserName/HeaderWithUserName';
import GoogleMap from '../GoogleMap/GoogleMap';

const VehicleSearching = () => {
    //console.log(VehicleTypeFakeData);
    const { id } = useParams();

    const vehicleSearching = VehicleTypeFakeData.find(vehicle => parseInt(vehicle.id) === parseInt(id));
    //console.log(vehicleSearching);
    const { register, errors } = useForm();

    const history = useHistory();
    const handleProceedBooking =()=>{
        history.push(`/vehicleConfirmation/${id}`)
    }
    return(
        <div className="home">
            <HeaderWithUserName></HeaderWithUserName>
            
            <Container>
                <div className="d-flex justify-content-center align-items-center my-5">
                    <div className="col-md-7 bookingPage-info text-white">
                    <GoogleMap></GoogleMap>
                    </div>
                    <div className="col-md-5 ">
                        <div className="row">
                            <form className="bookingPage-form" onSubmit={handleProceedBooking}>
                                <label>Pick From</label>
                                <input name="pickFrom"  placeholder="Enter your pick up address" ref={register({ required: true })} />
                                {errors.pickFrom && <span className="error">Pick From is required</span>}

                                <label>Pick To</label>
                                <input name="destination" placeholder="Enter your destination address"  ref={register({ required: true })} />
                                {errors.destination && <span className="error">Destination is required</span>}

                                <div className="d-flex justify-content-between">
                                    <div className="mr-2">
                                        <label>From</label>
                                        <input name="from" type="date" ref={register({ required: true })} />
                                        {errors.from && <span className="error">Date is required</span>}
                                    </div>
                                    <div>
                                        <label>To</label>
                                        <input name="to" type="date" ref={register({ required: true })} />
                                        {errors.to && <span className="error">Date is required</span>}
                                    </div>
                                </div>
                                <input type="submit"  variant="warning" value="Ride Searching" className="my-3 btn-block font-weight-bold"/>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default VehicleSearching;
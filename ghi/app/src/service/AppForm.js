
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AppForm() {
    const [vin, setVin] = useState('');
    const [customer, setCustomer] = useState('');
    const [datetime, setDateTime] = useState('');
    const [technicians, setTechnicians] = useState([]);
    const [technician, setTechnician] = useState('');
    const [reason, setReason] = useState('');
    const navigate = useNavigate();


    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const handleDateTimeChange = (event) => {
        const value = event.target.value;
        setDateTime(value);
    }

    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    }

    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.vin = vin;
        data.customer = customer;
        data.date_time = datetime;
        data.technician = technician;
        data.reason = reason;

        const url = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newApp = await response.json();
            setVin('');
            setCustomer('');
            setDateTime('');
            setTechnician('');
            setReason('');
            navigate('/appointments');
        }
    }

    const fetchTechniciansData = async () => {
        const url = 'http://localhost:8080/api/technicians/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    }

    useEffect(() => {
        fetchTechniciansData();
    }, []);

    let spinnerClasses = 'd-flex justify-content-center mb-3';
    let dropdownClasses = 'form-select d-none';
    if (technicians.length > 0) {
      spinnerClasses = 'd-flex justify-content-center mb-3 d-none';
      dropdownClasses = 'form-select';
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a service appointment</h1>
                    <form onSubmit={handleSubmit} id="create-appointment-form">

                        <div className="form-floating mb-3">
                            <input onChange={handleVinChange} value={vin} required name="vin" placeholder="VIN"  type="text"  id="vin" className="form-control" />
                            <label htmlFor="vin">Automobile VIN</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={handleCustomerChange} value={customer} placeholder="Customer" required type="text" name="customer" id="customer" className="form-control" />
                            <label htmlFor="customer">Customer</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                onChange={handleDateTimeChange}
                                value={datetime}
                                placeholder="Date and Time"
                                required
                                type="datetime-local"
                                name="date_time"
                                id="date_time"
                                className="form-control"
                            />
                            <label htmlFor="date_time">Date and Time</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleTechnicianChange} value={technician} required name="technician" id="technician" className="form-select">
                                <option value="">Choose a technician</option>
                                {technicians.map(technician => {
                                    console.log(technician.id)
                                    return (
                                        <option key={technician.id} value={parseInt(technician.id)}>{technician.first_name} {technician.last_name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleReasonChange} value={reason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                            <label htmlFor="reason">Reason</label>
                        </div>
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
      </div>
    )



}

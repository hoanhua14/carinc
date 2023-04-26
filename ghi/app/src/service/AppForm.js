import React, { useEffect, useState } from 'react';

export default function AppForm() {
    const [technicians, setTechnicians] = useState([]);

    const [formData, setFormData] = useState({
        vin: '',
        customer: '',
        date: '',
        time: '',
        technician: '',
        reason: '',
    })

    const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    }

    useEffect(() => {
        fetchData();
      }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:8080/api/appointments/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch (url, fetchConfig);
        if (response.ok) {
            setFormData({
                vin: '',
                customer: '',
                date: '',
                time: '',
                technician: '',
                reason: '',
            });
            document.getElementById("create-appointment-form").reset()
        }
    }

    const handleFormChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setFormData({
            ...formData,

            [inputName]: value
        })
    }

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
                            <input onChange={handleFormChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                            <label htmlFor="vin">Automobile VIN</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Customer" required type="text" name="customer" id="customer" className="form-control" />
                            <label htmlFor="customer">Customer</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Date" required type="date" name="date_time" id="date" className="form-control" />
                            <label htmlFor="date">Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Time" required type="time" name="date_time" id="time" className="form-control" />
                            <label htmlFor="time">Time</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} required name="technicians" id="technicians" className="form-select">
                                <option value="">Choose a technician</option>
                                {technicians.map(technician => {
                                    return (
                                        <option key={technician.id} value={technician.id}>{technician.first_name} {technician.last_name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                            <label htmlFor="reason">Reason</label>
                        </div>
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
      </div>
    )



}

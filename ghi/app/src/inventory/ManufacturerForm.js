import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ManufacturerForm() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = name;

        const manufacturersUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(manufacturersUrl, fetchConfig);
        if (response.ok) {
            const newManufacturer = await response.json();
            console.log(newManufacturer);

            setName('');

            navigate('/manufacturers');
        }
    }

    useEffect(() => {
      }, []);

    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a Manufacturer</h1>
              <form onSubmit={handleSubmit} id="create-location-form">
                <div className="form-floating mb-3">
                  <input onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={name}/>
                  <label htmlFor="style_name">Manufacturer Name</label>
                </div>
                <button className="btn btn-success">Create</button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default ManufacturerForm;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SalespersonForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employeeID, setEmployeeID] = useState('');
    const navigate = useNavigate();

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    }

    const handleEmployeeIDChange = (event) => {
        const value = event.target.value;
        setEmployeeID(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeID;

        const salespeopleUrl = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(salespeopleUrl, fetchConfig);
        if (response.ok) {
            const newSalesperson = await response.json();
            console.log(newSalesperson);

            setFirstName('');
            setLastName('');
            setEmployeeID('');

            navigate('/salespeople');
        }
    }

    useEffect(() => {
      }, []);

      return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Add a Salesperson</h1>
              <form onSubmit={handleSubmit} id="create-location-form">
                <div className="form-floating mb-3">
                  <input onChange={handleFirstNameChange} placeholder="First Name" required type="text" name="firstName" id="firstName" className="form-control" value={firstName}/>
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handleLastNameChange} placeholder="Last Name" required type="text" name="lastName" id="lastName" className="form-control" value={lastName}/>
                  <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handleEmployeeIDChange} placeholder="Employee ID" required type="text" name="employeeID" id="employeeID" className="form-control" value={employeeID}/>
                  <label htmlFor="employee_id">Employee ID</label>
                </div>
                <button className="btn btn-success">Create</button>
              </form>
            </div>
          </div>
        </div>
      );

}

export default SalespersonForm;

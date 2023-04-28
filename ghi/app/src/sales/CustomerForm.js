import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



function CustomerForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    }

    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);
    }

    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.first_name = firstName;
        data.last_name = lastName;
        data.phone_number = phoneNumber;
        data.address = address;

        const customersUrl = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(customersUrl, fetchConfig);
        if (response.ok) {
            const newCustomer = await response.json();
            console.log(newCustomer);

            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setAddress('');

            navigate('/customers');
        }
    }

    useEffect(() => {
      }, []);

      return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Add a Customer</h1>
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
                  <input onChange={handlePhoneNumberChange} placeholder="Phone Number" required type="text" name="phoneNumber" id="phoneNumber" className="form-control" value={phoneNumber}/>
                  <label htmlFor="phone_number">Phone Number</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control" value={address}/>
                  <label htmlFor="address">Address</label>
                </div>
                <button className="btn btn-success">Create</button>
              </form>
            </div>
          </div>
        </div>
      );

}

export default CustomerForm;

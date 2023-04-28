import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SaleForm() {

    const [automobiles, setAutomobiles] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [price, setPrice] = useState('');
    const [automobile, setAutomobile] = useState('');
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const navigate = useNavigate();

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value);
    }

    const handleAutomobileChange = (event) => {
        const value = event.target.value;
        setAutomobile(value);
    }

    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setSalesperson(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.price = price;
        data.automobile = automobile;
        data.salesperson = salesperson;
        data.customer = customer;

        const salesUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(salesUrl, fetchConfig);
        if (response.ok) {
            const newSale = await response.json();
            console.log(newSale);

            setPrice('');
            setAutomobile('');
            setSalesperson('');
            setCustomer('');

            navigate('/sales');
        }
    }

    const fetchAutomobileData = async () => {
        const url = 'http://localhost:8100/api/automobiles/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos);
        }
    }

    const fetchSalespeopleData = async () => {
        const url = 'http://localhost:8090/api/salespeople/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.salespeople);
        }
    }

    const fetchCustomerData = async () => {
        const url = 'http://localhost:8090/api/customers/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customers);
        }
    }

    useEffect(() => {
        fetchAutomobileData();
        fetchSalespeopleData();
        fetchCustomerData();
      }, []);

      const availableAutomobiles = automobiles.filter(automobile => automobile.sold === false)

      return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Record a new sale</h1>
              <form onSubmit={handleSubmit} id="create-location-form">
                <div className="mb-3">
                <label htmlFor="automobile">Automobile VIN</label>
                  <select onChange={handleAutomobileChange} required name="automobile" id="automobile" className="form-select" value={automobile}>
                    <option value="">Choose an Automobile VIN</option>
                    {availableAutomobiles.map(automobile => {
                      return (
                          <option key={automobile.vin} value={automobile.vin}>
                              {automobile.vin}
                          </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-3">
                <label htmlFor="salesperson">Salesperson</label>
                  <select onChange={handleSalespersonChange} required name="salesperson" id="salesperson" className="form-select" value={salesperson}>
                    <option value="">Choose a salesperson</option>
                    {salespeople.map(salesperson => {
                      return (
                          <option key={salesperson.id} value={salesperson.id}>
                              {salesperson.first_name + " " + salesperson.last_name}
                          </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-3">
                <label htmlFor="customer">Customer</label>
                  <select onChange={handleCustomerChange} required name="customer" id="customer" className="form-select" value={customer}>
                    <option value="">Choose a customer</option>
                    {customers.map(customer => {
                      return (
                          <option key={customer.id} value={customer.id}>
                              {customer.first_name + " " + customer.last_name}
                          </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input onChange={handlePriceChange} required type="text" className="form-control" id="price" placeholder="0" value={price}/>
                </div>
                <button className="btn btn-success">Create</button>
              </form>
            </div>
          </div>
        </div>
      );

}

export default SaleForm;

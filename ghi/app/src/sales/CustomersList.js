import { useState, useEffect } from 'react';

function CustomersList() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:8090/api/customers/";
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setCustomers(data.customers);
            }
        }
        fetchData();
    }, []);

    return (
        <>
        <div className=" py-3 text-left">
            <h1>Customers</h1>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
          {customers.map(customer => {
            return (
              <tr key={customer.id}>
                <td>{ customer.first_name } </td>
                <td>{ customer.last_name } </td>
                <td>{ customer.phone_number } </td>
                <td>{ customer.address } </td>
              </tr>
            );
          })}
          </tbody>
        </table>
        <div>
          <a href='http://localhost:3000/customers/new/'><button className="btn btn-success" type='button'>Add a Customer</button></a>
        </div>
        </>
    );

}

export default CustomersList;

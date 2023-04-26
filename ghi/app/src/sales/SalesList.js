import { useState, useEffect } from 'react';

function SalesList() {

    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:8090/api/sales/";
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setSales(data.sales);
            }
        }
        fetchData();
    }, []);

    return (
        <>
        <div className=" py-3 text-left">
            <h1>Sales</h1>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Salesperson Employee ID</th>
              <th>Salesperson Name</th>
              <th>Customer</th>
              <th>VIN</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {sales.map(sale => {
            return (
              <tr key={sale.id}>
                <td>{ sale.salesperson.employee_id } </td>
                <td>{ sale.salesperson.first_name + " " + sale.salesperson.last_name } </td>
                <td>{ sale.customer.first_name + " " + sale.customer.last_name } </td>
                <td>{ sale.automobile.vin } </td>
                <td>{ sale.price } </td>
              </tr>
            );
          })}
          </tbody>
        </table>
        <div>
          <a href='http://localhost:3000/sales/new/'><button className="btn btn-success" type='button'>Record a new sale</button></a>
        </div>
        </>
    );

}

export default SalesList;

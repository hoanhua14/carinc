import { useState, useEffect } from 'react';

function SalespersonHistory() {

    const [sales, setSales] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const [salesperson, setSalesperson] = useState('');

    const handleSalespersonChange = async event => {
        const value = event.target.value;
        setSalesperson(value);
    }

    const fetchSalespeopleData = async () => {
        const url = "http://localhost:8090/api/salespeople/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.salespeople);
        }
    }

    const fetchSalesData = async () => {
        const url = "http://localhost:8090/api/sales/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales);
        }
    }

    useEffect(() => {
        fetchSalesData();
        fetchSalespeopleData();
    }, []);

    const filteredSales = sales.filter(sale => sale.salesperson.id === parseInt(salesperson));

    return (
        <>
        <div className="mb-3">
            <div className=" py-3 text-left">
                <h1>Salesperson history</h1>
            </div>
                  <select onChange={handleSalespersonChange} required name="salesperson" id="salesperson" className="form-select" value={salesperson}>
                    <option value="">Choose a Salesperson</option>
                    {salespeople.map(salesperson => {
                      return (
                          <option key={salesperson.id} value={salesperson.id}>
                              {salesperson.first_name + " " + salesperson.last_name}
                          </option>
                      );
                    })}
                  </select>
                </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Salesperson</th>
              <th>Customer</th>
              <th>VIN</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {filteredSales.map(sale => {
            return (
              <tr key={sale.id}>
                <td>{ sale.salesperson.first_name + " " + sale.salesperson.last_name } </td>
                <td>{ sale.customer.first_name + " " + sale.customer.last_name } </td>
                <td>{ sale.automobile.vin } </td>
                <td>{ sale.price } </td>
              </tr>
            );
          })}
          </tbody>
        </table>
        </>
    );

}

export default SalespersonHistory;

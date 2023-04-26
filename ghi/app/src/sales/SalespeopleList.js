import { useState, useEffect } from 'react';

function SalespeopleList() {

    const [salespeople, setSalespeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:8090/api/salespeople/";
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setSalespeople(data.salespeople);
            }
        }
        fetchData();
    }, []);

    return (
        <>
        <div className=" py-3 text-left">
            <h1>Salespeople</h1>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
          {salespeople.map(salesperson => {
            return (
              <tr key={salesperson.id}>
                <td>{ salesperson.employee_id } </td>
                <td>{ salesperson.first_name } </td>
                <td>{ salesperson.last_name } </td>
              </tr>
            );
          })}
          </tbody>
        </table>
        <div>
          <a href='http://localhost:3000/salespeople/new/'><button className="btn btn-success" type='button'>Add a Salesperson</button></a>
        </div>
        </>
    );

}

export default SalespeopleList;

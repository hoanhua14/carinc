import { useState, useEffect } from 'react';

function AutomobilesList() {
    const [automobiles, setAutomobiles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:8100/api/automobiles/";
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setAutomobiles(data.autos);
            }
        }
        fetchData();
    }, []);

    return (
        <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Color</th>
              <th>Year</th>
              <th>Model</th>
              <th>Manufacturer</th>
            </tr>
          </thead>
          <tbody>
          {automobiles.map(automobile => {
            return (
              <tr key={automobile.id}>
                <td>{ automobile.vin } </td>
                <td>{ automobile.color } </td>
                <td>{ automobile.year } </td>
                <td>{ automobile.model.name } </td>
                <td>{ automobile.model.manufacturer.name } </td>
              </tr>
            );
          })}
          </tbody>
        </table>
        <div>
          <a href='http://localhost:3000/automobiles/new/'><button className="btn btn-success" type='button'>Add an Automobile</button></a>
        </div>
        </>
      );
}

export default AutomobilesList;

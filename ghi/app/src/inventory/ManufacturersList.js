import { useState, useEffect } from 'react';

function ManufacturersList() {

    const [manufacturers, setManufacturers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:8100/api/manufacturers/";
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setManufacturers(data.manufacturers);
            }
        }
        fetchData();
    }, []);

    return (
        <>
        <div className=" py-3 text-left">
            <h1>Manufacturers</h1>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
          {manufacturers.map(manufacturer => {
            return (
              <tr key={manufacturer.id}>
                <td>{ manufacturer.name } </td>
              </tr>
            );
          })}
          </tbody>
        </table>
        <div>
          <a href='http://localhost:3000/manufacturers/new/'><button className="btn btn-success" type='button'>Add a Manufacturer</button></a>
        </div>
        </>
      );
  }

  export default ManufacturersList;

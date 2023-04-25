import React, { useEffect, useState } from 'react';

function AutomobileForm() {
    const [models, setModels] = useState([]);
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [model, setModel] = useState('');

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleModelChange = (event) => {
        const value = event.target.value;
        setModel(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = model;

        const automobilesUrl = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(automobilesUrl, fetchConfig);
        if (response.ok) {
            const newAutomobile = await response.json();
            console.log(newAutomobile);

            setColor('');
            setYear('');
            setVin('');
            setModel('');
        }
      }

      const fetchData = async () => {
        const url = 'http://localhost:8100/api/models/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          setModels(data.models);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

      return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>New Automobile</h1>
              <form onSubmit={handleSubmit} id="create-location-form">
                <div className="form-floating mb-3">
                  <input onChange={handleColorChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" value={color}/>
                  <label htmlFor="color">Color</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handleYearChange} placeholder="Year" required type="text" name="year" id="year" className="form-control" value={year}/>
                  <label htmlFor="year">Year</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handleVinChange} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" value={vin}/>
                  <label htmlFor="vin">VIN</label>
                </div>
                <div className="mb-3">
                  <select onChange={handleModelChange} required name="model" id="model" className="form-select" value={model}>
                    <option value="">Choose a Model</option>
                    {models.map(model => {
                      return (
                          <option key={model.id} value={model.id}>
                              {model.name}
                          </option>
                      );
                    })}
                  </select>
                </div>
                <button className="btn btn-success">Create</button>
              </form>
            </div>
          </div>
        </div>
      );

}

export default AutomobileForm;

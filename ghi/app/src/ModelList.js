import { useState, useEffect } from 'react';

export default function VehicleModels() {
    const [models, setModels] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:8100/api/models/";
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setModels(data.models);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div>Models</div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Manufacturer</td>
                            <td>Picture</td>
                        </tr>
                    </thead>
                    <tbody>
                    {models?.map((model) => {
                        return (
                            <tr key={model.id}>
                                <td>{model.name}</td>
                                <td>{model.manufacturer.name}</td>
                                <td>
                                    <img src={model.picture_url}
                                    width="100"
                                    height="100"/>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

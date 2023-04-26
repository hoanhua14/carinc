
import { useState, useEffect } from 'react';

export default function TechList() {
    const [technicians, setTechnicians] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:8080/api/technicians/';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setTechnicians(data.technicians);
            }
        }
        fetchData();
    }, []);


    return (
        <>
            <div className="font-weight-bold">Technicians</div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Employee ID</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                    </tr>
                </thead>
                <tbody>
                {technicians?.map((technician) => {
                    return (
                        <tr key={technician.id}>
                            <td>{technician.employee_id}</td>
                            <td>{technician.first_name}</td>
                            <td>{technician.last_name}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )

}

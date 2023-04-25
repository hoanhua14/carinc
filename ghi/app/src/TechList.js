import { NavLink } from 'react-router-dom';

export default function TechList(props) {
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
                {props.technicians?.map((technician) => {
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

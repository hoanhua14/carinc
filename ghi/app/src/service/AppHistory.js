import { useState, useEffect } from 'react';

export default function ServiceHistory() {
    const [appointments, setAppointments] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const fetchAppointmentData = async () => {
        const url = 'http://localhost:8080/api/appointments/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }
    }

    const handleSearchValueChange = (event) => {
        const value = event.target.value;
        setSearchValue(value.toLowerCase());
    }

    const filterAppointments = (appointments, searchValue) => {
        const result = [];
        for (let appointment of appointments) {
            if (appointment['vin'].toLowerCase().includes(searchValue)) {
                result.push(appointment);
            }
        }
        return result;
    }

    const filteredAppointments = filterAppointments(appointments, searchValue)

    useEffect(() => {
        fetchAppointmentData();
    }, []);

    return (
        <>
            <div className="font-weight-bold">Service Appointments</div>
            <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={handleSearchValueChange}
            />
            <button type="submit" id="searchButton">Search</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>VIN</td>
                        <td>Is VIP?</td>
                        <td>Customer</td>
                        <td>Date</td>
                        <td>Time</td>
                        <td>Technician</td>
                        <td>Reason</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                {filteredAppointments.map((appointment) => {
                    const dateTime = new Date(appointment.date_time);
                    const date = dateTime.toLocaleDateString('en-US');
                    const time = dateTime.toLocaleTimeString('en-US');

                    return (
                        <tr key={appointment.id}>
                            <td>{appointment.vin}</td>
                            <td>{appointment.VIP ?"Yes":"No"}</td>
                            <td>{appointment.customer}</td>
                            <td>{date}</td>
                            <td>{time}</td>
                            <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                            <td>{appointment.reason}</td>
                            <td>{appointment.status}</td>
                        </tr>
                    )
                })}

                </tbody>
            </table>
        </>
    )
}


// import { useState, useEffect } from 'react';

// export default function ServiceHistory() {
//     const [appointments, setAppointments] = useState([]);
//     const fetchAppointmentData = async () => {
//         const url = 'http://localhost:8080/api/appointments/';
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             setAppointments(data.appointments);
//         }
//     }



//     useEffect(() => {
//         fetchAppointmentData();
//     }, []);

//     return (
//         <>
//             <div className="font-weight-bold">Service Appointments</div>
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <td>VIN</td>
//                         <td>Is VIP?</td>
//                         <td>Customer</td>
//                         <td>Date</td>
//                         <td>Time</td>
//                         <td>Technician</td>
//                         <td>Reason</td>
//                         <td>Status</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {appointments?.map((appointment) => {
//                     const dateTime = new Date(appointment.date_time);
//                     const date = dateTime.toLocaleDateString('en-US');
//                     const time = dateTime.toLocaleTimeString('en-US');

//                     return (
//                         <tr key={appointment.id}>
//                             <td>{appointment.vin}</td>
//                             <td>{appointment.VIP ?"Yes":"No"}</td>
//                             <td>{appointment.customer}</td>
//                             <td>{date}</td>
//                             <td>{time}</td>
//                             <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
//                             <td>{appointment.reason}</td>
//                             <td>{appointment.status}</td>
//                         </tr>
//                     )
//                 })}

//                 </tbody>
//             </table>
//         </>
//     )
// }

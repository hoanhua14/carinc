import { useState, useEffect } from 'react';

export default function AppList() {
    const [appointments, setAppointments] = useState([]);
    const [automobiles, setAutomobiles] = useState([]);
    useEffect(() => {
        const fetchAppointmentData = async () => {
            const url = 'http://localhost:8080/api/appointments/';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setAppointments(data.appointments);
            }
        }
        const fetchAutomobileData = async () => {
            const url = 'http://localhost:8100/api/automobiles/';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setAutomobiles(data.automobiles);
            }

        }


        fetchAppointmentData();
        fetchAutomobileData();
    }, []);






    return (
        <>
            <div className="font-weight-bold">Service Appointments</div>
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
                    </tr>
                </thead>
                <tbody>
                {appointments?.map((appointment) => {
                    const dateTime = new Date(appointment.date_time);
                    const date = dateTime.toLocaleDateString('en-US');
                    const time = dateTime.toLocaleTimeString('en-US');

                    return (
                        <tr key={appointment.id}>
                            <td>{appointment.vin}</td>
                            <td>{appointment.VIP ?"Yese":"No"}</td>
                            <td>{appointment.customer}</td>
                            <td>{date}</td>
                            <td>{time}</td>
                            <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                            <td>{appointment.reason}</td>
                        </tr>
                    )
                })}

                </tbody>
            </table>
        </>
    )
}

// import { useState, useEffect } from 'react';

// export default function AppList() {
//     const [appointments, setAppointments] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//             const url = 'http://localhost:8080/api/appointments/';
//             const response = await fetch(url);
//             if (response.ok) {
//                 const data = await response.json();
//                 setAppointments(data.appointments);
//             }
//         }
//         fetchData();
//     }, []);



//     return (
//         <>
//             <div className="font-weight-bold">Service Appointments</div>
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <td>VIN</td>
//                         <td>Customer</td>
//                         <td>Date</td>
//                         <td>Time</td>
//                         <td>Technician</td>
//                         <td>Reason</td>
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
//                             <td>{appointment.customer}</td>
//                             <td>{date}</td>
//                             <td>{time}</td>
//                             <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
//                             <td>{appointment.reason}</td>
//                         </tr>
//                     )
//                 })}
//                 </tbody>
//             </table>
//         </>
//     )
// }

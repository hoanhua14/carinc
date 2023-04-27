import { useState, useEffect } from 'react';

export default function ServiceHistory(props) {
    const [appointments, setAppointments] = useState([]);
    const fetchAppointmentData = async () => {
        const url = 'http://localhost:8080/api/appointments/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }
    }

    // const [inputText, setInputText] = useState('');
    // let inputHandler = (e) => {
    //     var searchTerm = e.target.value();
    //     setInputText(searchTerm);
    // }


    useEffect(() => {
        fetchAppointmentData();
    }, []);

    return (
        <>
            <div className="font-weight-bold">Service Appointments</div>
            <input
                type="text"
                placeholder="Search by VIN"
                // value={searchTerm}
                //onChange={inputHandler}
            />
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
                {appointments?.map((appointment) => {
                    const getDate = new Date(appointment.date);
                    const getTime = new TimeRanges(appointment.time);
                    const date = getDate.toLocaleDateString('en-US');
                    const time = getTime.toLocaleTimeString('en-US');

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

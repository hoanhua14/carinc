import { useState, useEffect } from 'react';

export default function AppList() {
    const [appointments, setAppointments] = useState([]);

    const fetchAppointmentData = async () => {
        const url = 'http://localhost:8080/api/appointments/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const activeApps = data.appointments.filter(appointment => appointment.status === 'Created');
            setAppointments(activeApps);
        }
    }
//fetchAppointmentData's last code will rerender the page by updating the state, so whenever
// i want the page to rerender, i can just call fetchAppData again

    const handleCancel = async (id) => {
        const url = `http://localhost:8080/api/appointments/${id}/cancel`;
        const fetchConfig = {
            method: 'PUT',
        }
        const cancelResponse = await fetch(url, fetchConfig);
        if (cancelResponse.ok) {
            setAppointments(oldAppointments => {
              const filteredApps = oldAppointments.filter(appointment => {
                return appointment.id !== id;
              });
              return filteredApps;
            });
          }
    }

    const handleFinish = async (id) => {
        const url = `http://localhost:8080/api/appointments/${id}/finish`;
        const fetchConfig = {
            method: 'PUT',
        }
        const finishResponse = await fetch(url, fetchConfig);
        if (finishResponse.ok) {
            setAppointments(oldAppointments => {
                const filteredApps = oldAppointments.filter(appointment => {
                  return appointment.id !== id;
                });
                return filteredApps;
              });
            }
        }



    // life cycle, put functions here to be executed one time after page is load (because of [])
    useEffect(() => {

        fetchAppointmentData();

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
                            <td>{appointment.VIP ?"Yes":"No"}</td>
                            <td>{appointment.customer}</td>
                            <td>{date}</td>
                            <td>{time}</td>
                            <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                            <td>{appointment.reason}</td>
                            <td>
                                <button onClick={() => handleCancel(appointment.id)}>
                                    Cancel
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handleFinish(appointment.id)}>
                                    Finish
                                </button>
                            </td>
                        </tr>
                    )
                })}

                </tbody>
            </table>
        </>
    )
}

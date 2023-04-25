import { NavLink } from 'react-router-dom';

export default function VehicleModels(props) {
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
                    {props.models?.map((model) => {
                        return (
                            <tr key={model.id}>
                                <td>{model.name}</td>
                                <td>{model.manufacturer.name}</td>
                                <td>
                                    <img src={model.picture_url}
                                    width="100"
                                    height="100"/>
                                </td>
                                {/* <td>{model.picture_url}</td> */}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

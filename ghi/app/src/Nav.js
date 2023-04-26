import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Inventory</a>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/manufacturers">Manufacturers</NavLink>
                <NavLink className="dropdown-item" to="/manufacturers/new">Create a Manufacturer</NavLink>
                <NavLink className="dropdown-item" to="/models">Models</NavLink>
                <NavLink className="dropdown-item" to="/models/new">Create a Model</NavLink>
                <NavLink className="dropdown-item" to="/Automobiles">Automobiles</NavLink>
                <NavLink className="dropdown-item" to="/Automobiles/new">Create an Automobile</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Service</a>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/technicians">Technicians</NavLink>
                <NavLink className="dropdown-item" to="/technicians/new">Add a Technician</NavLink>
                <NavLink className="dropdown-item" to="/appointments">Service Appointments</NavLink>
                <NavLink className="dropdown-item" to="/appointments/new">Create a service appointment</NavLink>
                <NavLink className="dropdown-item" to="/appointments/history">Service history</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sales</a>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/salespeople">Salespeople</NavLink>
                <NavLink className="dropdown-item" to="/salespeople/new">Add a Salesperson</NavLink>
                <NavLink className="dropdown-item" to="/customers">Customers</NavLink>
                <NavLink className="dropdown-item" to="/customers/new">Add a Customer</NavLink>
                <NavLink className="dropdown-item" to="/sales">Sales</NavLink>
                <NavLink className="dropdown-item" to="/sales/new">Add a Sale</NavLink>
                <NavLink className="dropdown-item" to="/sales/history">Salesperson History</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;

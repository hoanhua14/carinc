import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturersList from './inventory/ManufacturersList';
import ManufacturerForm from './inventory/ManufacturerForm';
import AutomobilesList from './inventory/AutomobilesList';
import AutomobileForm from './inventory/AutomobileForm';
import VehicleModels from './inventory/ModelList';
import NewModelForm from './inventory/NewModelForm';
import NewTechForm from './service/NewTechForm';
import TechList from './service/TechList';
import SalespeopleList from './sales/SalespeopleList';
import SalespersonForm from './sales/SalespersonForm';
import CustomersList from './sales/CustomersList';
import CustomerForm from './sales/CustomerForm';
import SalesList from './sales/SalesList';
import SaleForm from './sales/SaleForm';
import SalespersonHistory from './sales/SalespersonHistory';
import AppList from './service/AppList';
import AppForm from './service/AppForm';
import ServiceHistory from './service/AppHistory';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route path="" element={<ManufacturersList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="automobiles">
            <Route path="" element={<AutomobilesList />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>
          <Route path="models">
            <Route path="" element={<VehicleModels  />} />
            <Route path="new" element={<NewModelForm />} />
          </Route>
          <Route path="technicians" >
            <Route path="" element={<TechList/>} />
            <Route path="new" element={<NewTechForm />} />
          </Route>
          <Route path="appointments" >
            <Route path="" element={<AppList/>} />
            <Route path="new" element={<AppForm />} />
            <Route path="history" element={<ServiceHistory />} />
          </Route>
          <Route path="salespeople">
            <Route path="" element={<SalespeopleList />} />
            <Route path="new" element={<SalespersonForm />} />
          </Route>
          <Route path="customers">
            <Route path="" element={<CustomersList />} />
            <Route path="new" element={<CustomerForm />} />
          </Route>
          <Route path="sales">
            <Route path="" element={<SalesList />} />
            <Route path="new" element={<SaleForm />} />
            <Route path="history" element={<SalespersonHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

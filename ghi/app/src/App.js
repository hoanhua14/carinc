import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturersList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import AutomobilesList from './AutomobilesList';
import AutomobileForm from './AutomobileForm';
import VehicleModels from './ModelList';
import NewModelForm from './NewModelForm';
import SalespeopleList from './sales/SalespeopleList';
import SalespersonForm from './sales/SalespersonForm';
import CustomersList from './sales/CustomersList';
import CustomerForm from './sales/CustomerForm';
import SalesList from './sales/SalesList';
import SaleForm from './sales/SaleForm';
import SalespersonHistory from './sales/SalespersonHistory';

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
            <Route index element={<VehicleModels models={props.models}/>} />
            <Route path="new" element={<NewModelForm />} />
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

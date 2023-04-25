import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturersList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import AutomobilesList from './AutomobilesList';
import AutomobileForm from './AutomobileForm';
import VehicleModels from './ModelList';
import NewModelForm from './NewModelForm';
import NewTechForm from './NewTechForm';
import TechList from './TechList';

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
          <Route path="technicians" >
            <Route path="" element={<TechList />} />
            <Route path="new" element={<NewTechForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

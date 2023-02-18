import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DaakAdmin from './pages/DaakAdmin';
import DaakSUser from './pages/DaakSUser';
import DaakUser from './pages/DaakUser';


function App() {

  
  return (
    <HashRouter>
    <Routes>
      <Route path='/admin' element={<DaakAdmin/>} />
      <Route path='/user/:id' element={<DaakUser/>} />
      <Route path='/users' element={<DaakSUser/>} />
    </Routes>
    
    </HashRouter>
    
  );
}

export default App;

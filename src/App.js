import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DaakAdmin from './pages/DaakAdmin';
import DaakSUser from './pages/DaakSUser';
import DaakUser from './pages/DaakUser';
import DaakUUser from './pages/DaakUUser';


function App() {

  
  return (
    <HashRouter>
    <Routes>
      <Route path='/admin' element={<DaakAdmin/>} />
      <Route path='/getletter/:id' element={<DaakUser/>} />
      <Route path='/updategetletter/:id' element={<DaakUUser/>} />
      <Route path='/getletters' element={<DaakSUser/>} />
    </Routes>
    </HashRouter>    
  );

}

export default App;

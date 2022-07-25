import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowPersonas from './components/ShowPersona';
import CreatePersona from './components/CreatePersona';
import EditPersona from './components/EditPersona';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowPersonas/>} />
          <Route path='/create' element={ <CreatePersona/>} />
          <Route path='/edit/:id' element={ <EditPersona/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

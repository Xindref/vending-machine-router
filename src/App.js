import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Candy from './Candy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/soda' element={<Soda />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/candy' element={<Candy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

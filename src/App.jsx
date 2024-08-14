import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import DetailsProduct from './components/component_Phuc/DetailsProduct';
import ListSPChayBo from './components/component_Phuc/ListSPChayBo';
import ListSPMoi from './components/component_Phuc/ListSPMoi';
import ListSPTheoMua from './components/component_Phuc/ListSPTheoMua';

function App() {

  return (
    <div className="App">

      <header>Header</header>

      <main>
        <div className='Test-Component-Phuc'>
          <div className='ListSPMoi'>
            <ListSPMoi />
          </div>
          
        </div>
      </main>
      <footer>Footer</footer>
    </div>

  );
}

export default App;

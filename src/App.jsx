import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import ListSPChayBo from './components/component_Phuc/ListSPChayBo';
import ListSPMoi from './components/component_Phuc/ListSPMoi';
import ListSPTheoMua from './components/component_Phuc/ListSPTheoMua';
import CRUDData from './components/component_Phuc/CRUDData';

function App() {

  return (
    <div className="App">

      <header>Header</header>

      <main>
        <div className='Test-Component-Phuc'>
          <div className='ListSPMoi'>
            <ListSPMoi />
          </div>

          {/* <div className='ListSPMoi'>
            <ListSPTheoMua />
          </div>

          <div className='ListSPMoi'>
            <ListSPChayBo />
          </div> */} 

          {/*<div>
            <CRUDData />
          </div> */}

        </div>
      </main>
      <footer>Footer</footer>
    </div>

  );
}

export default App;

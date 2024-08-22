import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import ListSPChayBo from './components/component_Phuc/ListSPChayBo';
import ListSPMoi from './components/component_Phuc/ListSPMoi';
import ListSPTheoMua from './components/component_Phuc/ListSPTheoMua';
import CRUDData from './components/component_Phuc/CRUDData';
import Header from './components/component_dinh/Home/header'
import Footer from './components/component_dinh/Home/footer'
import HomePage from './components/component_dinh/Home/home'

function App() {

  return (
    <div className="App">
      <HomePage />
    </div>

  );
}

export default App;

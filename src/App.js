import logo from './logo.svg';
import './App.css';
import Header from './Home/header';
import HomePage from './Home/home';
import Footer from './Home/footer';

function App() {
  return (
    <div className="body">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;

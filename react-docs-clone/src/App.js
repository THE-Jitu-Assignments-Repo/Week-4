import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import Body from './components/body/Body';

function App() {
  return (
    <div className="App">
     
        <NavBar />
        <Header />
        <Body />
        <img src={logo} className="App-logo" alt="logo" />
      
  
    </div>
  );
}

export default App;

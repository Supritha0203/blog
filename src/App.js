import './App.css';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import React,{useEffect} from 'react'
import Footer from './components/Footer';


function App() {
  useEffect(()=>{
Aos.init();
  },[])
  return (
    <div className="App rounded">  
    <div className="appy">  
      <h1 className='header'>Hamees!! This one's for you {"<3"}</h1>
     <Home/>
     <div className='foot'><Footer/></div>
     
     </div>   
    </div>
  );
}

export default App;

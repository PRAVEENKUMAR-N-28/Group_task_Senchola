import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import About from './Jaiser/About';
import Contact from './Jaiser/Contact';
import Why_page from  './Component/Why _Senchola/Why_page';
import Singup from './Component/Signup/Signup';
import Forms from './form/Forms';
import Home from './home/Home';
import Navs from './Navs';
import Footer from './Footer';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

      <Navs/>

      <Routes>
      <Route path="/About" element={<About />}> </Route> 
      <Route path="/Contact" element={<Contact/>}> </Route>
      <Route path="/Why_Senchola" element={<Why_page />}></Route> 
      <Route path="/Singup" element={<Singup />} />
      <Route path="/Form" element={<Forms />}></Route>
      <Route path='/' element={<Home />}></Route>
     
    

      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>

  );
}

export default App;

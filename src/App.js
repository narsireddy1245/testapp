import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';


import Header from './header';
import Footer from './footer';
import Default from './default';

import Default2 from './Default2';
import Default3 from './Default3';

import Login from './login';

import Recruiter1 from './recruiter1';




function App() {
  return (
    <div className="App">


<Header />
      <Routes>
        <Route exact path = "/Default" element ={<Default />}/>
      
        <Route exact path = "/Default2" element ={<Default2 />}/>
        <Route exact path = "/Default3" element ={<Default3 />}/>        
        <Route exact path='/Login' element={<Login/>} />           
        <Route exact path = "/Recruiter1" element ={<Recruiter1 />}/>
             

         
      </Routes>
      <Footer/>
   




     </div>
  );
}

export default App;

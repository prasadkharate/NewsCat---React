// import logo from './logo.svg';
import './App.css';
import Business from './component/Business';
import Entertainment from './component/Entertainment';
import General from './component/General';
import Navbar from './component/Navbar';
import News from './component/News';
import Health from './component/Health';
import Science from './component/Science';
import Technology from './component/Technology';
import Sports  from './component/Sports'


import {
  Routes,
  Route,
} from "react-router-dom";



function App() {
   
  return (
    <>
   
    <Navbar/>
    <Routes> 
                        <Route path='/' element={<News   pageSize={5} country="in"/>}/>                        
                        <Route path='/business' element={  <Business/> } />
                        <Route path='/entertainment' element={ <Entertainment />} />
                        <Route path='/general' element={ <General />} />
                        <Route path='/health' element={ <Health />} />
                        <Route path='/science' element={ <Science/> } />
                        <Route path='/technology' element={ <Technology />} />
                        <Route path='/sports' element={<Sports />} />
                        {/* <Route path='/business' element={ <News pageSize={5} country="in" category="entertainment"/>} /> */}
                            
                        {/* <Route path="/about"  element={<About/>}  /> */}
                            
                    </Routes>
    
    </>
  );
}

export default App;

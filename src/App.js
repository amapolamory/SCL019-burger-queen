import { BrowserRouter, Route, Routes } from 'react-router-dom';
import maincss from './style/main.css'
import Home from './Home.jsx';
import Kitchen from './components/kitchen.jsx';
import Orders from './components/orders.jsx';

export default function App() {
  return (
 <BrowserRouter>
 <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/kitchen' element={<Kitchen/>}/>
   <Route path='/orders' element={<Orders/>}/>
  
 </Routes>

 
 </BrowserRouter>
  );
}


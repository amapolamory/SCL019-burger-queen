import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';

export default function App() {
  return (
 <BrowserRouter>
 <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/Home' element={<Home/>}/>
 </Routes>
 </BrowserRouter>
  );
}


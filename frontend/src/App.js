import { Toaster } from 'react-hot-toast';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useState } from 'react';
import Footer from './components/Footer';
import Technoloy from './pages/Technoloy';
import Inderste from './pages/Inderste';
import VM from './pages/VM';
import About from './pages/About';
import WebDevlopemnet from './pages/WebDevlopemnet';
import MobileApp from './pages/MobileApp';
import Ecommmerce from './pages/E-commerce';
import Contact from './pages/Contact';
import Whatsapp from './components/Whatsapp';
function App() {
  const [se,sett] = useState(false)
  return (
    <>
<BrowserRouter>
  <Toaster
  position="top-center"
  toastOptions={{
    duration: 4000,
    style: {
      background: 'black',
      color: '#fff',
    },
    success: {
      iconTheme: {
        primary: 'green',
        secondary: 'white',
      },
    },
  }}
/>
<Navbar sett={sett} se={se}/>
<Whatsapp/>
           <Routes>
               <Route path='/' element={<Home sett={sett} se={se}/>}/>
               <Route path='/technology' element={<Technoloy/>}/>
               <Route path='/industries' element={<Inderste/>}/>
               <Route path='/Vision-mission' element={<VM/>}/>
               <Route path='/About' element={<About/>}/>
               <Route path='/Web-devlopement' element={<WebDevlopemnet/>}/>
               <Route path='/mobile-development' element={<MobileApp/>}/>
               <Route path='/ecommerce' element={<Ecommmerce/>}/>
               <Route path='/contact' element={<Contact/>}/>
           </Routes>
<Footer/>
       </BrowserRouter>
    </>
  );
}

export default App;

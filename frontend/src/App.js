import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useState } from 'react';
import Footer from './components/Footer';
import Technoloy from './pages/Technoloy';
import Inderste from './pages/Inderste';
import About from './pages/About';
import MobileApp from './pages/MobileApp';
import Ecommmerce from './pages/E-commerce';
import Contact from './pages/Contact';
import Whatsapp from './components/Whatsapp';
import Requests from './pages/Request';
import Blogs from './pages/Blogs';
import Webdevlopement from './pages/Webdevlopement';
import ChatBOT from './components/ChatBOT';
function App() {
  const [ui, setui] = useState(false)
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
        <Navbar ui={ui} setui={setui} />
        <Whatsapp />
        <ChatBOT  />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/technology' element={<Technoloy />} />
          <Route path='/industries' element={<Inderste />} />
          <Route path='/about' element={<About />} />
          <Route path='/web-development' element={<Webdevlopement />} />
          <Route path='/mobile-development' element={<MobileApp />} />
          <Route path='/ecommerce' element={<Ecommmerce />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/request' element={<Requests />} />
          <Route path='/blogs' element={<Blogs />} />

          {/* ✅ 404 Page */}
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center h-screen">
                <h1>Page Not Found - Deeshix Technology </h1>
                <br/>
                <p><span style={{fontSize:40}}>Oops!</span> The page you are looking for doesn't exist.</p>
                <a href="/" style={{color:'blue'}}>Go Back Home</a>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='bg-red-500 text-lg'>Hello</div> */}
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>

  )
}

export default App

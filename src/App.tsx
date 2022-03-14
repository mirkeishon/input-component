import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Sidebar from './components/Sidebar'

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <Header menu={isOpen} open={openMenu}/>
    <main className='relative max-w-5xl'>
      <Sidebar menu={isOpen} open={openMenu}/>
      <Inputs/>
    </main>
    <Footer/>
    </>
  );
}

export default App;

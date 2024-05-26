import React, { useState } from 'react'
import Modal from './Modal';
<<<<<<< HEAD
import Register from './Regiser';

=======
import Register from './Register';
>>>>>>> cb00cfd1749185e579259a21f961d3f70bc53f2a

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div className='App'>
   <button onClick={toggleModal} className='App__signup'>Sign up</button>
   {
    isOpen ? (
         <Modal toggleModal={toggleModal}>
    <h1>Sign up </h1>
     <Register/>
 
   </Modal>
    ):null
   }
  
    </div>
  )
}
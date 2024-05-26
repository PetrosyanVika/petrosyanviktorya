import React, { useEffect } from 'react'
import './Modal.scss'

export default function Modal({children,toggleModal}) {
  useEffect(()=>{
    const handleClick=(e)=>{
      const {className}=e.target

      if (className && className==='Modal') {
        toggleModal(false)
      }
    }
    window.addEventListener('click',handleClick)
    return()=>{
      window.removeEventListener('click',handleClick)
    }
  },[])
  return (
    <div>
      <div className="Modal">
        <div className="Modal__content">
           
            {children}
        </div>
      </div>
    </div>
  )
}
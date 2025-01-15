import React from 'react'
import Code from '../assets/images/code.jpg'
import Guitar from '../assets/images/guitar.webp'
import Process3 from '../assets/images/Hobby1.png'


const Body = () => {
  return (
    <div>
       <div className="container px-4 py-5 delivery-process">
    <h2 className="pb-2 display-5 fw-bold top-text-before text-center">Hobbies</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col px-5 text-center">
        <div className="bg-gradient">
          <img src={Guitar} alt="" className='w-25 h-25 pb-4' />
        </div>
        <h2 className='top-text-before hovering-card'>Guitar</h2>
        <p className='top-text-before'>I love playing the guitar and enjoy creating melodies that reflect my emotions.</p>
      </div>
      <div className="col px-5 text-center">
        <div className="bg-gradient">
        <img src={Code} alt="" className='w-50 h-50' />
        </div>
        <h2 className='top-text-before hovering-card'>Coding</h2>
        <p className='top-text-before'> A simple hobby, but I like to build programs and craft solutions to solve real-world problems.</p>
        
      </div>
      <div className="col px-5 text-center">
        <div className="bg-gradient">
        <img src={Process3} alt="" className='w-25 h-25 pb-5' />
        </div>
        <h2 className='top-text-before hovering-card'>Traveling</h2>
        <p className='top-text-before'>Traveling has always been a way for me to enter a whole new reality .......

</p>
          <svg className="bi" width="1em" height="1em"><use xlink:href="#chevron-right"/></svg>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Body

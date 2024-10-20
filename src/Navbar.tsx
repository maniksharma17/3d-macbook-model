import React, { useEffect } from 'react'
import './style.css'
import gsap from 'gsap'

const Navbar = () => {

  useEffect(()=>{
    gsap.to('.listItem', {
      opacity: 1,
      delay: 1,
      duration: 1,
    })
    gsap.to('img', {
      opacity: 1,
      delay: 1,
      duration: 1,
    })
  }, [])

  return (
  <nav className="flex flex-row justify-between p-8 w-3/4 max-md:w-full m-auto items-center">
    <img src='apple.svg' width={20} height={20} className='opacity-0'></img>

    <div className="flex flex-row gap-10 justify-center font-['Helvetica Now Display'] max-md:hidden">
      {['iPhone', 'Mac', 'Store', 'Products', 'Services'].map(item => {
        return <div key={item} className='listItem opacity-0 text-gray-400 font-thin text-sm cursor-pointer hover:text-white transition duration-300'>
          {item}
        </div>
      })}
    </div>

    <div className="flex flex-row justify-between gap-8 items-center">
      <img src='bag.svg' width={20} height={20} className='cursor-pointer opacity-0'></img>
      <img src='search.svg' width={20} height={20} className='cursor-pointer opacity-0'></img>
    </div>
  </nav>
  )
}

export default Navbar
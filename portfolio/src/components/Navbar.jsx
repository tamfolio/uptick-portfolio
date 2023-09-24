import {GiHamburgerMenu} from 'react-icons/gi'
import {FaRegWindowClose} from 'react-icons/fa'
import { useState } from 'react'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    <div className='w-[100%] h-[50px] flex items-center justify-between pt-[54px] mb-[50px] px-[30px] md:px-[100px] relative'>
      <h1>Port<span>Folio</span></h1>
      <div className="gap-[50px] hidden md:flex">
        <a className="text-primary font-semibold text-[16px]" href="#home">Home</a>
        <a className="text-primary font-semibold text-[16px]" href="#work">Work</a>
        <a className="text-primary font-semibold text-[16px]" href="#about">About</a>
        <span className="text-primary font-semibold text-[16px]" href="#contact">Contact</span>
      </div>
      <div className='md:hidden' onClick={toggleMenu}>
          <GiHamburgerMenu/>
      </div>
      {showMenu && <div className='w-[100%] h-[100vh] bg-black absolute top-0 z-10 pt-[30px] px-[30px]'>
        <div className='flex w-[100%] items-center justify-end' onClick={toggleMenu}>
        <FaRegWindowClose className='fill-white w-[30px] h-[30px]'/> 
        </div>
        <div className="gap-[30px] flex flex-col mt-[50px] px-[50px]">
        <a className="text-white font-semibold text-[16px]" href="#home" onClick={toggleMenu}>Home</a>
        <a className="text-white font-semibold text-[16px]" href="#work" onClick={toggleMenu}>Work</a>
        <a className="text-white font-semibold text-[16px]" href="#about" onClick={toggleMenu}>About</a>
        <span className="text-white font-semibold text-[16px]" href="#contact" onClick={toggleMenu}>Contact</span>
      </div>
        </div>}
    </div>
  )
}

export default Navbar

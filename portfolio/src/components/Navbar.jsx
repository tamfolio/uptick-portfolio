import {GiHamburgerMenu} from 'react-icons/gi'

function Navbar() {
  return (
    <div className='w-[100%] h-[50px] flex items-center justify-between pt-[54px] mb-[50px] px-[30px] md:px-[100px]'>
      <h1>Port<span>Folio</span></h1>
      <div className="gap-[50px] hidden md:flex">
        <a className="text-primary font-semibold text-[16px]" href="#home">Home</a>
        <a className="text-primary font-semibold text-[16px]" href="#work">Work</a>
        <a className="text-primary font-semibold text-[16px]" href="#about">About</a>
        <span className="text-primary font-semibold text-[16px]" href="contact">Contact</span>
      </div>
      <div className='md:hidden'>
          <GiHamburgerMenu/>
      </div>
    </div>
  )
}

export default Navbar

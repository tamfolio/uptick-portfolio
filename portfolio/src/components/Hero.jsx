import Header from "./Header"
import Navbar from "./Navbar"

function Hero() {
  return (
    <div className="w-[100%] flex items-center justify-center flex-col px-[50px]md:px-[102px]">
      <Navbar className=""/>
      <Header/>
    </div>
  )
}

export default Hero

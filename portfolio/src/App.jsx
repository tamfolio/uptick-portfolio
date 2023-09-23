import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Work from './components/Work'

function App() {
return (
    <div className='w-[100%]'>
       <Hero/>
       <About/>
       <Work/>
       <Portfolio/>
       <Footer/>
    </div>
  )
}

export default App

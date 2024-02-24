import Footer from './components/Footer'
import NavBar from './components/NavBar'
import About from './home/About'
import Customer from './home/Customer'
import Home from './home/Home'
import Intro from './home/Intro'
import Model from './home/Model'
import Services from './home/Services'

function App() {
  return (
    <>
      <NavBar/>
      <Home />
      <Intro />
      <About />
      <Services />
      <Model />
      <Customer />
      <Footer />
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'
import Home from './pages/Home'
import Packages from './pages/Packages'
import ItineraryPage from './pages/ItineraryPage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path ='/' element = {<Home />} />
        <Route path = '/packages' element = {<Packages />} />
        <Route path = '/itenerary' element = {<ItineraryPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

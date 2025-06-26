import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path ='/' element = {<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

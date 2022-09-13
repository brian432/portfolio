import { Routes, Route, useLocation } from 'react-router-dom'

import './styles/styles.css'

import { Header } from './componentes/header/header'
import { Redes } from './componentes/redes/redes'
import { Home } from './componentes/pages/home/home'
import { About } from './componentes/pages/about/about'
import { Work } from './componentes/pages/work/work'

import { AnimatePresence } from 'framer-motion'
import { CarouselProvider } from './context/carouselContext'

import { RouteChangeProvider } from './context/routeChangeContext'

function App() {
  const location = useLocation()
  return (
    <>
      <RouteChangeProvider>
        <Header />
        <Redes />
      </RouteChangeProvider>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={
            <CarouselProvider>
              <Work />
            </CarouselProvider>
          }
          />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App;

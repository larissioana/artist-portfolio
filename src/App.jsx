import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlbumsPage from './components/albums/AlbumsPage'
import Homepage from './components/homepage/Homepage'
import Tour from './components/tour/Tour'
import Films from './components/films/Films'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/pageTransition/PageTransition'
import Band from './components/band/Band'

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence layout="crossfade">
        <Routes>
          <Route path="/" element={<PageTransition><Homepage /></PageTransition>} />
          <Route path="/discography" element={<AlbumsPage />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/films" element={<Films />} />
          <Route path="/band" element={<Band />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlbumsPage from './components/albums/AlbumsPage'
import Homepage from './components/homepage/Homepage'
import Tour from './components/tour/Tour'
import Films from './components/films/Films'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/pageTransition/PageTransition'

function App() {

  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageTransition><Homepage /></PageTransition>} />
          <Route path="/discography" element={<AlbumsPage />} />
          <Route path="/tour" element={<PageTransition><Tour /></PageTransition>} />
          <Route path="/films" element={<PageTransition><Films /></PageTransition>} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  )
}

export default App

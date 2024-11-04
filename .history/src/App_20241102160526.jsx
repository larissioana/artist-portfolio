
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlbumsPage from './components/albums/AlbumsPage'
import Homepage from './components/homepage/Homepage'
import Gallery from './components/gallery/Gallery'
import { Tooltip } from 'react-tooltip'
import Tour from './components/tour/Tour'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/discography" element={<AlbumsPage />} />
        <Route path="/tour" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

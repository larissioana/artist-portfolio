import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlbumsPage from './components/albums/AlbumsPage'
import Homepage from './components/homepage/Homepage'
import Tour from './components/tour/Tour'
import Films from './components/films/Films'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/discography" element={<AlbumsPage />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/events" element={<Films />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

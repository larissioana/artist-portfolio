
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlbumsPage from './components/albums/AlbumsPage'
import Homepage from './components/homepage/Homepage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/discography" element={<AlbumsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

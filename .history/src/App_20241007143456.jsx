
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlbumsPage from './pages/albums/AlbumsPage'
import HomePage from './pages/home/HomePage'
import Navigation from './components/navigation/Navigation'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discography" element={<AlbumsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import PosteDetail from './PosteDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/postes/:id" element={<PosteDetail />} />
    </Routes>
  )
}

export default App

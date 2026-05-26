import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TeamGrid from './pages/TeamGrid'
//import About from './pages/About'
//import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teamGrid" element={<TeamGrid />} />
      
    </Routes>
  )
}

export default App
//<Route path="/about" element={<About />} />
     // <Route path="*" element={<NotFound />} />
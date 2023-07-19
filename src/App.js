import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Music from './pages/Music'

const App = () => {
  return(
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/music" element={<Music />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
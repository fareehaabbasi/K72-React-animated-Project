import { Link, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/Projects'
import Agency from './pages/Agency'
import Navbar from './components/Navigation/Navbar'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/agency' element={<Agency />}></Route>
      </Routes>
    </div>
  )
}

export default App

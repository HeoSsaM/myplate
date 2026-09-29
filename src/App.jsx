import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Meals from './pages/Meals.jsx'
import Tips from './pages/Tips.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <div className="wrap">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="site-footer"><small>© {new Date().getFullYear()} MealLight</small></footer>
    </div>
  )
}
export default App

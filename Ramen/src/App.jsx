import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Navbar';
import Home from './Home';
import Add from './Add';
import Menu from './Menu';
import About from './About';
import RamenDetails from './RamenDetails';
import './style.css'


function App() {
  return (

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />

          <Route exact path="/ramen/:id" element={<RamenDetails/>}/>

        </Routes>
      </Router>

  )
}

export default App;
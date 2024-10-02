import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css'
import Home from './Home';
import About from './About'
import Navbar from './Navbar';
import Menu from './Menu';
import Add from './Add';
import RamenDetails from './RamenDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes style={{"margin":0}}>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/add" element={<Add/>}/>
        <Route exact path="/ramen/:id" element={<RamenDetails/>}/>
        <Route exact path="*" element={<NotFound/>}/>

      </Routes>
      
    </div>
    </Router>
  );
}

export default App;

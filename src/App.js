import './App.css';
import Header  from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project'; 
import Show_Responsive from './components/Show_Responsive/Show_Responsive';
import About from './components/About/About';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/work" element={<Project/>}/>
            <Route path="/responsiveness" element={<Show_Responsive/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
         </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

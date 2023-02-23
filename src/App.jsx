import './Styles/App.scss';
import {BrowserRouter as Router, Routes,Route }from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Chisono from './pages/Chisono';
import Blog from './pages/Blog';
import Contatti from './pages/Contatti';


const App = () =>{
    return(
        <Router>
        <div className="App"> 
        <Navbar />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/chi-sono" element={<Chisono />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contatti" element={<Contatti />} />

            
         </Routes>
        <Footer />
        </div>
        </Router>
    );
}; 

export default App;



import './App.css';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Addbooks from './pages/Addbooks';
import Books from './pages/Books';
import Home from './pages/Home';
import Edit from './pages/Edit';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/addbooks' element={<Addbooks />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

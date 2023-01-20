<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
=======
import './styles/App.css';
>>>>>>> branch-1
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
;
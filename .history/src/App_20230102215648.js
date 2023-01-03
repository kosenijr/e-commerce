import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;

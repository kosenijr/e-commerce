import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="App-header">
            <div className='sub-header-1 flexing'>
                <span>logo</span>
                <span>user greeting</span>
                <span>search icon</span>
                <span>cart icon</span>
            </div>
            <div className='sub-header-2 flexing'>
                <span>Our Products</span>
                <span>Checkout</span>
            </div>

        </header>
    )
}



export default Navbar
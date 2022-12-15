import Navbar from './Navbar'
import Padding from '../styles/Padding.css'
// import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <Padding>

            <>
                <Navbar />
                {children}
                {/* <Footer /> */}
            </>
        </Padding>

    )
}

export default Layout

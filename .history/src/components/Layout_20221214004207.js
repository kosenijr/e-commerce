import Navbar from './Navbar'
import Padding fron '../styles/Padding'
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

import Navbar from './Navbar'
import 
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

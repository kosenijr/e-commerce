import Navbar from './Navbar'
import Footer from './Fo'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>

    )
}

export default Layout

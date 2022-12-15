import Navbar from './Navbar'
import Footer from './'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>

    )
}

export default Layout

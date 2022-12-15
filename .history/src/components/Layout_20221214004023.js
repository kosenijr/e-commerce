import Navbar from './Navbar'
// import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Padding></Padding>
            <Navbar />
            {children}
            {/* <Footer /> */}
        </>

    )
}

export default Layout

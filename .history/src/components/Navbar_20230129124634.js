import Logo from './Logo'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <header className={styles['nav-container']}>
            <Logo />
            <p>this is happening</p>
        </header>
    )

}



export default Navbar
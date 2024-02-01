import styles from '../styles/Logo.module.css'
import logo from '../tf_logo/TicketFree.jpg'


const Logo = () => {
    return <img id={styles['asp-logo']} src={logo} alt='Logo/>
}

export default Logo
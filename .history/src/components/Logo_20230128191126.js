import styles from '../styles/Logo.module.css'
import Logo from '../tf_logo/TicketFree.jpg'


const Logo = () => {
    return <img id={styles['asp-logo']} src={Logo} alt='Logo' />
}

export default Logo
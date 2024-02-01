import styles from '../styles/Logo.module.css'
import TFLogo from '../tf_logo/TicketFree.jpg'


const Logo = () => {
    return (
        <div className="logo-container">
    <img id={styles['asp-logo']} src={TFLogo} alt='TFLogo' />

        </div>
    )
}

export default Logo
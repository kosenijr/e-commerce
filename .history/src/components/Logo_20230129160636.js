import styles from '../styles/Logo.module.css'
import img from '../tf_logo/TicketFree.jpg'



const Logo = () => {
    return (
        <div id={styles['asp-logo']}>
            <img className={styles['logo-img']} src={img} alt='logo/>
        </div>
    )



}
export default Logo
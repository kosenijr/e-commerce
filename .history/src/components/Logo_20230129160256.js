import styles from '../styles/Logo.module.css'
import img from '../tf_logo/TicketFree.jpg'



const Logo = () => {
    return (
        <div id={styles['asp-logo']}>
            <img className={styles} src={img} />
        </div>
    )



}
export default Logo
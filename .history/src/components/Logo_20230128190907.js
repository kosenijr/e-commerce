import styles from '../styles/Logo.module.css'
import img from '../tf_logo/'


const Logo = () => {
    return <span id={styles['asp-logo']}>{img} </span>
}

export default Logo
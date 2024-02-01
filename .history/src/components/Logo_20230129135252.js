import styles from '../styles/Logo.module.css'
import Image from '../../src/images/double-parking-1.jfif'


const Logo = () => {
    return (
        <div id={styles['asp-logo']}>
            <Image className={styles['logo-image']} />
        </div>

    )



}
export default Logo
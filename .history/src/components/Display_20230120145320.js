import Items from './Items'
import styles from '../styles/Global.module.css'
// import styles from '../styles/Display.css'

// log(Items);
const Display = () => {
    return (
        <div className={styles['display-container']}>
            <span className={styles['display-header']}>today's selection</span>
            <div className={styles['display-section']}>

            </div>
        </div>
    )
}

export default Display
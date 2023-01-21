import styles from '../styles/Global.module.css'
import from '../styles/Display.css'

const Display = () => {
    return (
        <div className={styles['display-container']}>
            <span className={styles['display-header']}></span>
            <div className={styles['display-section']}>
                <h4 className="call-to-action">
                    Be the first to know the status of daily parking within New York City.
                </h4>
            </div>
        </div>
    )
}

export default Display
import styles from '../styles/Display.module.css'

const Display = () => {
    return (
        <div className={styles['display-container']}>
            <span className={styles['display-header']}></span>
            <div className={styles['display-section']}>
                <h4 className={styles['call-to-action']}>
                    Be the first to know the general status of arking within New York City.
                </h4>
                <button className={styles['call-to-action-button']}>Subscribe</button>
            </div>
        </div>
    )
}

export default Display
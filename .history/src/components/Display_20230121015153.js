import styles from '../styles/Display.module.css'

const Display = () => {
    return (
        <div className={styles['display-container']}>
            <span className={styles['display-header']}></span>
            <div className={styles['display-section']}>
                <h4 className="call-to-action">
                    Be the first to know the status of daily parking within New York City.
                </h4>
                <button className={styles[]}>Let's Go!</button>
            </div>
        </div>
    )
}

export default Display
import styles from '../styles/Global.module.css'
// import styles from '../styles/Display.css'

const Display = () => {
    return (
        <div className={styles['display-container']}>
            <span className={styles['display-header']}></span>
            <div className={styles['display-section']}>
                <p className="call-to-action">
                    Be the first to know the status of daily par
                </p>
            </div>
        </div>
    )
}

export default Display
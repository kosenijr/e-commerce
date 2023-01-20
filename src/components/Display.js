import styles from '../styles/Global.module.css'
import '../styles/Display.css'

<<<<<<< HEAD


const log = console.log;
log(Items);
=======
>>>>>>> branch-1
const Display = () => {
    return (
        <div className={styles['display-container']}>
            <span className={styles['display-header']}></span>
            <div className={styles['display-section']}>
                <h4 className="call-to-action">
                    Be the first to know the status of daily parking within New York City.
                </h4>
                <button className="call-to-action-button">Let's Go!</button>
            </div>
        </div>
    )
}

export default Display
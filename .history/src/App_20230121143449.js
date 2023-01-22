import styles from './styles/App.module.css'
import Home from './components/Home'

function App() {
  return (
    <div className={styles['App']}>
      <Home className={styles['h]} />
    </div>
  );
}

export default App;
;
import styles from './styles/App.module.css'
import Home from './components/Home'

function App() {
  return (
    <div className={styles[]} id={styles['overlay']}>
      <Home />
    </div>
  );
}

export default App;
;
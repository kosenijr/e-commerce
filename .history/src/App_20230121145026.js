import styles from './styles/App.module.css'
import Home from './components/Home'

function App() {
  return (
    <div className={styles['App']} id={styles}>
      <Home />
    </div>
  );
}

export default App;
;
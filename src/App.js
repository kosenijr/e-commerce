import styles from './styles/App.module.css'
import Landing from './components/Landing'
import Client from './components/Client'

function App() {
  return (
    <div className={styles['App']} id={styles['overlay']}>
      <Landing />
      {/* <Client/> */}
    </div>
  );
}

export default App;
;
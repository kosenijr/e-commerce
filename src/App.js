import styles from './styles/App.module.css'
import Landing from './components/Landing'
import Client from './components/Client'
import End from './components/End'

function App() {
  return (
    <div className={styles['App']} id={styles['overlay']}>
      <Landing />
      {/* <Client/> */}
      {/* <End /> */}
    </div>
  );
}

export default App;
;
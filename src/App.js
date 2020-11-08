import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import liff from '@line/liff';
import { buildReplyText } from 'line-message-builder';
import Home from "./components/pages/Home";
import Event from "./components/pages/Event";


function App() {
  const sendMessage = () => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login({})
      }
      liff.sendMessages(buildReplyText(['Send Message']))
    })
  }

  return (
    <Router>
      <div className="App">
        <button className="button" onClick={sendMessage}>
          Send Message
        </button>
        <nav className={styles.nav}>
          <ul className={styles.navUl}>
            <li className={styles.navLi}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.navLi}>
              <Link to="/event">Event</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/event">
          <Event />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

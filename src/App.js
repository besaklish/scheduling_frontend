import './App.css';
import liff from '@line/liff';
import { buildReplyText } from 'line-message-builder';

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
    <div className="App">
      <button className="button" onClick={sendMessage}>
        Send Message
      </button>
      <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
    </div>
  );
}

export default App;

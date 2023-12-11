import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter';

function App() {
  let a = 10;
  let b = 20;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>D1</li>
          <li>D2</li>
          <li>D3</li>
        </ul>
        <h1 data-testid="myId">Test id</h1>
        <span title='sum'>{a + b}</span>
      </header>
      <Login />
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;

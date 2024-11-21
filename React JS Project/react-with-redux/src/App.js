import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Welcome from './Welcome';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h2>React With Redux</h2>
      <Welcome></Welcome>
    </div>
    </Provider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Welcome from './Welcome';
import AddTask from './AddTask';
import ViewTask from './ViewTask';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h2>React With Redux</h2>
      <Welcome></Welcome>
      <AddTask></AddTask>
        <hr/>
      <ViewTask></ViewTask>
    </div>
    </Provider>
  );
}

export default App;

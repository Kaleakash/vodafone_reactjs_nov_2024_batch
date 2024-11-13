import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import Counter from './Couter';
import Product from './Product';

function App() {
  // single line comments 
  /*            
    Multi line comments 
  */
  return (
    <div>
      <h3>React with useState hook Example</h3>
      {/* <Sample></Sample>
      <hr/>
      <Counter></Counter> */}
      <Product></Product>
    </div>
  );
}

export default App;

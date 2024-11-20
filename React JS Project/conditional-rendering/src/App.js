import logo from './logo.svg';
import React, { createElement } from 'react';
import './App.css';

function App() {
  
  //return React.createElement("h1","","Welcome to React JS without JSX")
  //return <h1>Welcome to React JS with JSX</h1>
  
  // return html contents without JSX
  // const h1Tag = createElement("h1","","Heading information")
  // const pTag = createElement("p",{className:"myClass"},"Welcome to React JS")
  // const divTag = React.createElement("div","",h1Tag,pTag)
  // return divTag;

  return(
    <div>
      <h1>Heading Information</h1>
      <p className='myClass'>Welcome to REact JS with JSX</p>
    </div>
  )
}

export default App;

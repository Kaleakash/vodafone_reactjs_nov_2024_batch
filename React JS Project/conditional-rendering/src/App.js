import logo from './logo.svg';
import React, { createElement, useEffect, useState } from 'react';
import './App.css';

function App() {
  let [flag,setFlag]=useState(true);
useEffect(()=> {
  setTimeout(()=> {
      setFlag(false);
  },5000)
})
  //return React.createElement("h1","","Welcome to React JS without JSX")
  //return <h1>Welcome to React JS with JSX</h1>
  // return html contents without JSX
  // const h1Tag = createElement("h1","","Heading information")
  // const pTag = createElement("p",{className:"myClass"},"Welcome to React JS")
  // const divTag = React.createElement("div","",h1Tag,pTag)
  // return divTag;
  // return(
  //   <div>
  //     <h1>Heading Information</h1>
  //     <p className='myClass'>Welcome to REact JS with JSX</p>
  //   </div>
  // )
 // return flag ? <h1>Hello</h1> : <h1>Hi</h1>
 return flag ? <h2>Data Loading....</h2> :<h2>We can display data</h2>
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const url = 'https://ephemeral-tapioca-4abd88.netlify.app/nytreats.json/'




  
  


function App() {
  const [rehab,setRehab] = React.useState('');  

  fetch(url)
.then((response) => response.json())
.then((data) => 
    this.setState({
      setRehab: data.results
}  ) 
   ) 
 
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
          
            { setRehab.map((rehab) => (
               <h1>{setRehab.PROVIDER_CITY}</h1>
            ))}
         
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react'
import logo from './logo.svg';
import './App.css';
import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
function App() {
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
          <Card>
            <Image src={logo} className="App-logo" alt="logo" />
            <Heading level={1}>We now have Auth!</Heading>
          </Card>
          <Button onClick={signOut}>Sign Out</Button>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

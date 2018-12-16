import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

class App extends React.Component {
   render() {
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
               <Link to="/about">About the author</Link>
               <ul>
                  <li>{process.env.REACT_APP_ENV_FILE}</li>
                  <li>{process.env.REACT_APP_SECRET}</li>
               </ul>
            </header>
         </div>
      );
   }
}

export default App;

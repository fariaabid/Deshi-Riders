import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <p>hello</p>
    </div>
  );
}

export default App;

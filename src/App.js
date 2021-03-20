import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import VehicleConfirmation from "./components/VehicleConfirmation/VehicleConfirmation";
import VehicleSearching from "./components/VehicleSearching/VehicleSearching";


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
           <Home></Home>
          </Route>
          <PrivateRoute path="/vehicleSearching/:id">
            <VehicleSearching></VehicleSearching>
          </PrivateRoute>
          <Route path="/vehicleConfirmation/:id">
            <VehicleConfirmation></VehicleConfirmation>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
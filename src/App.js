import React from 'react';
import Tabbars from "./Tabbar"
import Register from "./xiao/register"
import Login from "./xiao/login"
import { BrowserRouter as Router, Route } from 'react-router-dom'
class App extends React.Component {
  render() {
      return (
        <Router>
        
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={Tabbars} exact />
              
          
          
        </Router>
      )
  }
}

export default App;


import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Other/Login'
import './App.css';
import Home from './Home'
import * as React from 'react';
import AddItem from './components/LibraryItems/AddItem';
import SignIn from './components/Other/SignIn'
import ManageReader from './components/Reader/ManageReader'
class App extends React.Component {

 
 
  public render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/additems" component={AddItem} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/managereaders" component={ManageReader}/>


        </div>
      </Router>
    );
  }
}

export default App;

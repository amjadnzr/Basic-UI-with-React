import * as React from "react";
import { Redirect } from "react-router-dom";
import "../../css/Additem.css";

// import AddItem from './AddItem'
export default class Login extends React.Component {
  public state = {
    redirect: false,
    users: ["Amjad"],
    passwords: ["Asd"]
  };

  public checkDirect = (): boolean => {
    return this.state.redirect;
  };

  public submitHere = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.state.users.forEach(user => {
      if (user.toString() === e.currentTarget.user.value) {
        this.state.passwords.forEach(pass => {
          if (pass.toString() === e.currentTarget.password.value) {
            this.setState({
              redirect: true
            });
          }
        });
      }
    });
  };
  //  public onSubmit =(e: React.FormEvent<HTMLInputElement>)=> {
  //    <Redirect to="/" render={()=>{
  //      return(<h1>sdnfogndongz</h1>);
  //    }} />
  //  }

  public render() {
    return (
      <div>
        {this.state.redirect ? (
          <Redirect to="/additems" />
        ) : (
          <form onSubmit={this.submitHere} className="form">
            <h1>Login</h1>
            <input
              type="text"
              className="input-field"
              name="user"
              placeholder="Username"
            />
            <input
              type="password"
              className="input-field"
              name="password"
              placeholder="Password"
            />
            <input
              type="submit"
              className="button "
              id="button-1"
              value="Submit"
            />
          </form>
        )}
      </div>
    );
  }
}

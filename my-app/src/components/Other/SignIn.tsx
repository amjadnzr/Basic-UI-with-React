import * as  React from 'react'

export default class SignIn extends React.Component {
 public render() {
    return (
      <div>
        <form>
            <input type="text" placeholder="Admin Password" />
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />


        </form>
      </div>
    )
  }
}

import * as React from 'react'
import {Link} from 'react-router-dom'
import "../../css/Additem.css"

export default class Navbar extends React.Component {
    public render() {
    return (
      <div>
        <nav>
       <Link to='/login'> <button className="button" id='button-1'>SignIn</button></Link>       
       <Link to='/signin'> <button className="button" id="button-2">SignUp</button></Link>
        </nav>
      </div>
    )
  }
}

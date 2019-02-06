import * as React from 'react'
import {Link} from 'react-router-dom'
export default class InnerBar extends React.Component {
  public render() {
    return (
      <div>
        <button><Link to='/additems'>Manage Item</Link>></button>
        <button><Link to='/managereaders'>Manage Readers</Link>></button>
       
        <button> <Link to='/login'>Sign Out </Link> </button>
        
      </div>
    )
  }
}

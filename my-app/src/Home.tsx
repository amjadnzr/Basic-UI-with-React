import * as React from 'react'
import Navbar from './components/Other/Navbar'

export default class Home extends React.Component {
  public render() {
    return (
      <div>
        <Navbar/>
        <h1>Library Management System</h1>
      </div>
    )
  }
}

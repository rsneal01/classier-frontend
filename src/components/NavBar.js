import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/teachers' style={{paddingRight: '10px'}}>Teachers  </Link>
      <Link to='/teachers/new'> Add Teacher</Link>
    </div>

  )
}

export default NavBar
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../store/user-context'
import { connect } from 'react-redux';


import classes from './MainNavigation.module.css'
import { FaUserCircle, FaCamera } from "react-icons/fa";


function MainNavigation(props) {
  
    console.log(props)
    return (
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link to='/'>Reels</Link>
            </li>
            <li>
              <Link to='/upload'><FaCamera/></Link>
            </li>
            <li>
              <Link to='/user'><FaUserCircle/></Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user.user
    }
  }
  

  export default connect(mapStateToProps)(MainNavigation);
  
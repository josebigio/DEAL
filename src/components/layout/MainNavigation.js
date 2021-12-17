import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


import classes from './MainNavigation.module.css'
import { FaUserCircle, FaCamera } from "react-icons/fa";


function MainNavigation(props) {
  
    console.log("MainNavigation. Props:", props)
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
      userInfo: state.user.userInfo
    }
  }
  

  export default connect(mapStateToProps)(MainNavigation);
  
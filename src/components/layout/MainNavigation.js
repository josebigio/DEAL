import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../store/user-context'
import { connect } from 'react-redux';


import classes from './MainNavigation.module.css'

function MainNavigation(props) {
  
    console.log(props)
    return (
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link to='/'>All Meetups</Link>
            </li>
            <li>
              <Link to='/new-meetups'>Add New Meetup</Link>
            </li>
            <li>
              <Link to='/favorites'>My Favorites</Link>
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
  
import React from 'react';
import {HashRouter, NavLink} from 'react-router-dom';

const Header = () => {

  let styles = {
    containerStyle: {
      // backgroundColor: 'red',
      margin: '0 auto',
      width: 180,
      color: 'black',
      marginTop: 10

    },
    spanStyle: {
      margin: 10,
      border: '1px solid yellowgreen',
      padding: 4
    }
  }
  return (
      <HashRouter>
        <div style={styles.containerStyle}>
          <NavLink activeStyle={{color: 'tomato'}} to='/books'>
            <span style={styles.spanStyle}>Books</span>
          </NavLink>
          <NavLink activeStyle={{color: 'tomato'}} to='/movies'>
            <span style={styles.spanStyle}>Movies</span>
          </NavLink>
          <NavLink activeStyle={{color: 'tomato'}} to='/music'>
            <span style={styles.spanStyle}>Music</span>
          </NavLink>
        </div>
      </HashRouter>
  )
}

export default Header;

import React from 'react';
import AppContext from '../lib/app-context';

export default class Header extends React.Component {

  render() {
    const { user, signOut } = this.context;
    return (
      <header>
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand logo" href="#">
              GotoJapan
            </a>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link sign-up" href="#">Sign Up</a>
              </li>
              { user === null &&
              <li className="nav-item">
                <a className="nav-link log-in" href="#login">Log In</a>
              </li>
              }
              { user !== null &&
              <li className="nav-item">
                <a onClick={signOut} className="nav-link log-out" href="#">Log Out</a>
              </li>
              }
            </ul>
          </div>
        </nav>
      </header>
    );
  }

}

Header.contextType = AppContext;

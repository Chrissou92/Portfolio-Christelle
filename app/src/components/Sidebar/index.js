/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */


/**
 * Code
 */
const Sidebar = ({ routes, toggleSidebar }) => (
  <div id="sidebar">
    <div className="sidebar-item">
      <p>Hello, good visit of my site</p>
    </div>

    <nav className="sidebar-nav">
      {Object.keys(routes).map(path => (
        <NavLink
          key={path}
          to={path}
          exact
          className="sidebar-nav-link"
          onClick={toggleSidebar}
        >
          {routes[path].nav}
        </NavLink>
      ))}
    </nav>

    <div className="sidebar-item">
      <p>Visit my <a href="" className="external-link">Twitter</a></p>
      <p>Visit my <a href="" className="external-link">Linkedin</a></p>
      <p>Visit my <a href="" className="external-link">GitHub</a></p>
    </div>
  </div>
);
Sidebar.propTypes = {
  routes: PropTypes.object.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

/**
* Export
*/
export default Sidebar;

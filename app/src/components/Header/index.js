/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
/**
 * Local import
 */


/**
 * Code
 */
const Header = ({ routes }) => (
  <div id="header">
    <h1 id="header-name">Christelle Nicol</h1>
    {Object.keys(routes).map(path => (
      <Route
        exact
        key={path}
        path={path}
        render={() => (
          <h2 id="header-title">
            <a href="/">{routes[path].title}</a>
            <small>{routes[path].subtitle}</small>
          </h2>
        )}
      />
   ))}
  </div>
);

Header.propTypes = {
  routes: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Header;

/**
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';

/**
 * Local import
 */


/**
 * Code
 */
const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer id="footer">
      <p >
&#169;Christelle Nicol -{year}
      </p>
    </footer>
  );
};
/**
 * Export
 */
export default Footer;

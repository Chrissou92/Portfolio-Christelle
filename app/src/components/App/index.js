/*
 * Npm import
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withRouter, Route, Switch } from 'react-router-dom';


/*
 * Local import
 */
import Header from 'src/components/Header';
import Sidebar from 'src/components/Sidebar';
import Footer from 'src/components/Footer';

import Home from 'src/components/Home';
import Skills from 'src/components/Skills';

/*
* Data Routes
 */

const routes = {
  '/': {
    nav: 'Home',
    title: 'Home',
    subtitle: 'new life',
    component: Home,
  },
  '/work': {
    nav: 'Skills',
    title: 'Compétences',
    subtitle: ' Motivation et passion !',
    component: Skills,
  },
};
/*
 * Code
 */
const routesKeys = Object.keys(routes);

class App extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }
/*
* State
 */
state = {
  open: false,
}
handleKey = ({ key }) => {
  const { pathname } = this.props.location;

  // On va chercher l'index de la route
  const index = routesKeys.findIndex(path => path === pathname);

  if (key === 'ArrowUp' || key === 'ArrowLeft') {
    this.goToIndex(index - 1);
  }
  else if (key === 'ArrowDown' || key === 'ArrowRight') {
    this.goToIndex(index + 1);
  }
}
goToIndex = (index) => {
  // Est-ce que la route existe
  if (index in routesKeys) {
    // On va chercher le path
    const path = routesKeys[index];
    // On change de page
    this.props.history.push(path);
  }
}

  /*
  * Action
   */
  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  }
  /*
  * Rendu
   */
  render() {
    const { open } = this.state;
    return (
      <div id="portfolio" className={classNames({ open })}>
        <div id="sidebar-toggle" onClick={this.handleClick}>||</div>
        <Sidebar routes={routes} toggleSidebar={this.handleClick} />
        <main id="main">
          <Header routes={routes} />
          <div className="container">
            <Switch>
              {Object.keys(routes).map(path => (
                <Route
                  exact
                  key={path}
                  path={path}
                  component={routes[path].component}
                />
                ))}
              <Route render={() => <div>404</div>} />
            </Switch>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

/*
 * Export default
 */
export default withRouter(App);

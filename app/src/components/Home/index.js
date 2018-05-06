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

const Home = () => (
  <div id="home" className="content">
    <div className="content-img" />
    <section className="content-section">
      <div className="content-profil">
          Hello, je m'appelle Christelle, vous voici sur mon site portefolio fait en React.js.
      </div>


      <h2 className="content-title">Reconversion</h2>
      <p className="content-text">
        J'ai profité d'un congé parental récent pour me former et optimiser ma reconversion
        professionnelle vers le métier de développeur web.
        Après avoir suivi des cours en ligne via les MOOC, j'ai décidé d'intégrer
        l'école O'clock pour obtenir un titre professionnel de développeur.
        Après 5 mois de formation intensive, je me lance pour une nouvelle aventure !
      </p>
    </section>
  </div>
);

/**
  * Export
  */
export default Home;

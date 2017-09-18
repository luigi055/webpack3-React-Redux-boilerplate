import React from 'react';

const Features = () => (
  <div className="features">
    <h3>Interested in this boilerplate Features?</h3>
    <ul>
      <li>
        React, ReactDOM, Redux, React-Redux, React-Router, Redux-Thunk
        <i className="fa fa-thumbs-up" />
      </li>
      <li>Full sass support for Foundation 6 and Font Awesome</li>
      <li>
        PostCSS configured to be used from ie9 and some legacy browser fallbacks supported
      </li>
      <li>
        Images loader with images-webpack-loader which load and optimize your images
        {' '}
      </li>
      <li>Font loader supported</li>
      <li>Webpack dev server configured on port 3000</li>
      <li>also support for node server.js with express on port 3000 too</li>
      <li>Mocha, chai, sinon and react-test-utils in a jsdom enviroment</li>
      <li>
        Extract-Text-Plugin so you could separate your style.css from the bundle.js
      </li>
      <li>ESlint and Stylelint correctly configured</li>
      <li>Yarn is here with some scripts</li>
      <li>And of course git too!</li>
    </ul>
  </div>
);

export default Features;

// @flow
import React from 'react';
import {connect} from 'react-redux';

const About = props => {
  /*eslint-disable */
  const {greet} = props;
  /* eslint-enable*/
  return (
    <div className="about">
      <h1 className="title-component">React Redux Webpack 3 Boilerplate</h1>
      <p>{greet} This is a Full React app workflow used in Level Up Techs </p>
    </div>
  );
};

const mapStateToProps = state => ({greet: state.greet});

export default connect (mapStateToProps) (About);

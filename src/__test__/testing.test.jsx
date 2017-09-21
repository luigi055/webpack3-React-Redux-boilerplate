import React from 'react';
import chai from 'chai';
/*eslint-disable */
import sinon from 'sinon';
/*eslint-enable */
import {mount, render, shallow} from 'enzyme';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';

const expect = chai.expect;
chai.use (sinonChai);
chai.use (chaiEnzyme ());

// DUMMY TEST
it ('should return true', () => {
  const Fixture = () => (
    <div>
      <input id="checked" defaultChecked />
      <input id="not" defaultChecked={false} />
    </div>
  );

  const wrapper = shallow (<Fixture />); // mount/render/shallow when applicable

  expect (wrapper.find ('#checked')).to.be.checked ();
  expect (wrapper.find ('#not')).to.not.be.checked ();
});

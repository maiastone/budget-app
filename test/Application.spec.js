//shallow are your unit tests!
  //doesn't render any child component (can't really run componentDidMount tests)
  //can't access api data
  //good for silly unit tests
  //check initial states before you reach for the api data
  //
//Mount is go-to for functionality
  //good for checking if state is being set
  //need setTimeout for testing state on Mount?
//helpers - you can make fake data


import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
const locus = require('locus');

import Application from '../components/application.jsx';

describe('Application', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'div');
  });

  it('should have a default budgets state of []', () => {
    const wrapper = mount(<Application />);
    expect(wrapper.state().messages).to.be.empty;
  });

  it('shoulder render three nav buttons', () => {
    const wrapper = mount(<Application />);
    assert.equal(wrapper.find('.nav-button').length, 3);
  })

  it('should have a default route of dashboard', () => {
    const wrapper = mount(<Application />);
    assert.equal(wrapper.state().route, 'dashboard');
  });
  it.skip('should set state on componentDidMount')
});

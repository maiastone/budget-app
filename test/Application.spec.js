//shallow are your unit tests!
  //doesn't render any child component (can't really run componentDidMount tests)
  //can't access api data
  //good for silly unit tests
  //check initial states before you reach for the api data
  //
//Mount is go-to for functionality
  //good for checking if state is being set
//helpers - you can make fake data


import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
const locus = require('locus');
import user from '../test/helpers/User.js'
import budgets from '../test/helpers/Budgets.js';

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
  });

  it('should have a default route of dashboard', () => {
    const wrapper = mount(<Application />);
    assert.equal(wrapper.state().route, 'dashboard');
  });

  it('should call componentWillMount when mounting correctly, fam', () => {
    sinon.spy(Application.prototype, 'componentWillMount');
    const wrapper = mount(<Application user={user} />);
    expect(Application.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('should change the state of route to reports if the reports button is clicked', () => {
    const wrapper = mount(<Application />);
    wrapper.find('#reports-button').simulate('click');
    assert.equal(wrapper.state().route, 'reports');
  });

  it('should change the state of route to reports if the reports button is clicked', () => {
    const wrapper = mount(<Application user={user}/>);
    wrapper.setState({ user });
    wrapper.find('#budgetForm-button').simulate('click');
    assert.equal(wrapper.state().route, 'budgetForm');
  });

  it('should change the state of route to reports if the reports button is clicked', () => {
    const wrapper = mount(<Application user={user}/>);
    wrapper.setState({ user });
    wrapper.find('#budgetForm-button').simulate('click');
    assert.equal(wrapper.state().route, 'budgetForm');
  });
});

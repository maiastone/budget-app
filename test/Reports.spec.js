import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
const locus = require('locus');
import budgets from '../test/helpers/Budgets.js';

import Application from '../components/application.jsx';
import Reports from '../components/reports.jsx';

describe('Reports', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Reports budgets={budgets}/>);
    assert.equal(wrapper.type(), 'div');
  });

  it('should have a default allowance state of an empty string', () => {
    const wrapper = mount(<Reports budgets={budgets} />);
    expect(wrapper.state().allowance).to.be.empty;
  });

  it('should have a budget object as props', () => {
    const wrapper = mount(<Reports budgets={budgets}/>);
    assert.isObject(wrapper.props('budget'));
  });

  it('should render three report list elements', () => {
    const wrapper = mount(<Reports budgets={budgets} />);
    assert.equal(wrapper.find('.report-list').length, 3)
  });

  it('should have a input field for allowance', () => {
    const wrapper = mount(<Reports budgets={budgets} />);
    assert.equal(wrapper.find('.allowance-input').length, 1);
  });

  it('should set the state of allowance based on input', () => {
    const wrapper = mount(<Reports budgets={budgets} />);
    const allowanceInput = wrapper.find('.allowance-input');
    allowanceInput.simulate('change', { target: { value: 100 } });
    assert.equal(wrapper.state('allowance'), 100);
  });
});

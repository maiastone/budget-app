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

  it.skip('should have a default budgets state of []', () => {
    const wrapper = mount(<Reports budgets={budgets} />);
    expect(wrapper.state().messages).to.be.empty;
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

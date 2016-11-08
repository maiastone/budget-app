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
    const wrapper = shallow(<Reports  budgets={budgets}/>);
    assert.equal(wrapper.type(), 'div');
  });

  it.skip('should have a default budgets state of []', () => {
    const wrapper = mount(<Application />);
    expect(wrapper.state().messages).to.be.empty;
  });
});

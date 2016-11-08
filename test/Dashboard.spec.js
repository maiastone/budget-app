import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
const locus = require('locus');

import Dashboard from '../components/Dashboard.jsx';
import DashboardGraphs from '../components/DashboardGraphs.jsx';
import DashboardGraphCard from '../components/DashboardGraphCard.jsx'
import budgets from '../test/helpers/Budgets.js';

describe('Dashboard', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Dashboard />);
    assert.equal(wrapper.type(), 'div');
  });

  it('should have a budget object as props', () => {
    const wrapper = mount(<Dashboard budgets={budgets}/>);
    assert.isObject(wrapper.props('budget'));
  });

  it('should render four graphs based on budget props', () => {
    const wrapper = mount(<Dashboard budgets={budgets} />);
    assert.equal(wrapper.find('.dashboardGraphs').length, 4);
  })
});

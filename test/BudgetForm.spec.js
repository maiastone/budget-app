import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
const locus = require('locus');

import Application, { setUserBudget }  from '../components/application.jsx';
import BudgetForm from '../components/budgetForm.jsx'
import budgets from '../test/helpers/Budgets.js';

describe('Budgetform', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<BudgetForm />);
    assert.equal(wrapper.type(), 'div');
  });

  it('should have a budget object as props', () => {
    const wrapper = mount(<BudgetForm budgets={budgets}/>);
    assert.isObject(wrapper.props('budget'));
  });

  it('should render two budget inputs', () => {
    const wrapper = mount(<BudgetForm budgets={budgets} />);
    assert.equal(wrapper.find('.budget-input').length, 2);
  });

  it('should render four budget cards when given budget props containing four separate budgets', () => {
    const wrapper = mount(<BudgetForm budgets={budgets} />);
    assert.equal(wrapper.find('.budget-card').length, 4);
  });

  it('should render four separate list items when given budget props containing four actual expenses', () => {
    const wrapper = mount(<BudgetForm budgets={budgets} />);
    assert.equal(wrapper.find('#0').length, 4)
  });

  it('should render four separate statuses when given budget props containing four actual expenses', () => {
    const wrapper = mount(<BudgetForm budgets={budgets} />);
    assert.equal(wrapper.find('.status').length, 4)
  });
  // it.skip('should call setUserBudget when value is given to the budget input field', () => {
  //   const mockOnChange = sinon.spy()
  //   const wrapper = shallow(<BudgetForm onChange={setUserBudget} budgets={budgets} />);
  //   wrapper.find('#budget-name').simulate('change', { target: { value: 'tools' } });
  //
  // })

  it.only('can render a new budget when the submit budget button is clicked', () => {
    const wrapper = mount(<BudgetForm onChange={setUserBudget} budgets={budgets} />);
    wrapper.find('#budget-name').simulate('change', { target: { value: 'tools' } });
    wrapper.find('#budget-amount').simulate('change', { target: { value: 100 } });
    wrapper.find('.submit-button').simulate('click');
    assert.equal(wrapper.find('.budget-card').length, 5);
    //need to use spy or stub here! 
  });
});

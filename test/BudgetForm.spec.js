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

  it('should render a delete button for each budget item', () => {
    const wrapper = mount(<BudgetForm budgets={budgets}/>);
    assert.equal(wrapper.find('.delete-button').length, 4);
  });

  it('should render four separate statuses when given budget props containing four actual expenses', () => {
    const wrapper = mount(<BudgetForm budgets={budgets} />);
    assert.equal(wrapper.find('.status').length, 4)
  });

  it('can handle onChange events and call setUserBudget on change within the budget-amount input', () => {
    const onChange = sinon.spy();
    const wrapper = mount(<BudgetForm setUserBudget={onChange} budgets={budgets} />);
    wrapper.find('#budget-amount').simulate('change', { target: { value: 100 } });
    expect(onChange).to.have.property('callCount', 1);
  });

  it('can handle onChange events and call setUserBudget on change within the budget-title input', () => {
    const onChange = sinon.spy();
    const wrapper = mount(<BudgetForm setUserBudget={onChange} budgets={budgets} />);
    wrapper.find('#budget-title').simulate('change', { target: { value: 'Yay!' } });
    expect(onChange).to.have.property('callCount', 1);
  });

  it('can call pushBudget with an onClick event on its submit button', () => {
    const onClick = sinon.spy();
    const wrapper = mount(<BudgetForm pushBudget={onClick} budgets={budgets} />);
    wrapper.find('.submit-button').first().simulate('click');
    expect(onClick).to.have.property('callCount', 1);
  });

  it('can call deleted budget with an onClick event on the delete button', () => {
    const onClick = sinon.spy();
    const wrapper = mount(<BudgetForm deleteCard={onClick} budgets={budgets} />);
    wrapper.find('.delete-button').first().simulate('click');
    expect(onClick).to.have.property('callCount', 1);
  });
});

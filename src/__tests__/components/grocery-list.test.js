import React from 'react';
import {shallow} from 'enzyme';
import {GroceryList} from '../../components/grocery-list';
import "../../__tests__/setup/setupTests"


describe('GroceryList', () => {
  
  it('Renders without crashing', () => {
    const groceryList = ['item1', 'item2', 'item3']

    shallow(<GroceryList 
      groceryList={groceryList}
    />);
  });

  it('Renders grocery list array of items', () => {
    const groceryList = ['item1', 'item2', 'item3']

    const wrapper = shallow(<GroceryList 
      groceryList={groceryList}
    />);

    // expect(wrapper.find('button').hasClass('grocery-item')).to.equal(true);
    expect(wrapper.find('.box-grocery-list').to.have.lengthOf(3))
  });

  it('Deletes item from grocery list', () => {
    const groceryList = ['item1', 'item2', 'item3']

    const wrapper = shallow(<GroceryList 
      groceryList={groceryList}
    />);

    wrapper.find('.button-delete-grocery-item').at(0).simulate('click')
      
    expect(wrapper.deleteHandler).toHaveBeenCalled();

  });

});


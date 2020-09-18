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
    const groceryList = ['item1', 'item2', 'item3'];

    const wrapper = shallow(<GroceryList 
      groceryList={groceryList}
    />);

    const groceryItem = wrapper.find('.box-grocery-list').at(0).hasClass('button-delete-grocery-item');

    // need a way to to confirm the groceryItems array 
    expect(groceryItem).toBe(true)

  });

  it('Deletes item from grocery list', () => {
    const groceryList = ['item1', 'item2', 'item3']
    const dispatch = jest.fn();

    const wrapper = shallow(<GroceryList // make component a variable 
      groceryList={groceryList}
      dispatch={dispatch}
    />);
    wrapper.deleteHandler = jest.fn();
    // need to find a way to select just one
    const deleteButton = wrapper.find('.button-delete-grocery-item').at(0)
    console.log(deleteButton.debug())
    deleteButton.simulate('click'); // click deleteButton
      
    expect(wrapper.deleteHandler).toHaveBeenCalled(); // expect deleteButton in component to have been called

  });

});


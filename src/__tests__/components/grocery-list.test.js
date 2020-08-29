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

    expect(wrapper.hasClass('grocery-item')).toEqual(true);
      // why is it not showing className of array
  });

  it('Deletes item from grocery list', () => {

    const groceryList = ['item1', 'item2', 'item3']
    const deleteItemFromGroceryList = jest.fn();

    const wrapper = shallow(<GroceryList 
      groceryList={groceryList}
      deleteItemFromGroceryLis={deleteItemFromGroceryList}
      />);

      wrapper.simulate('click')

      expect(deleteItemFromGroceryList).toHaveBeenCalled();
      // why isn't it being called??
  });

});


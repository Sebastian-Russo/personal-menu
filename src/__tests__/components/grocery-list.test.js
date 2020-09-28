import React from 'react';
import {shallow} from 'enzyme';
import {GroceryList} from '../../components/grocery-list';
import "../../__tests__/setup/setupTests"

// const {GroceryList} = component;

describe('GroceryList', () => {
  
  it('Renders without crashing', () => {
    const groceryList = ['item1', 'item2', 'item3']

    shallow(<GroceryList 
      groceryList={groceryList}
    />);
  });

});


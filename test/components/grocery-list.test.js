import React from 'react';
import {shallow} from 'enzyme';
import GroceryList from '../../src/components/grocery-list';

describe('GroceryList', () => {
  
  it('Renders without crashing', () => {
    shallow(<GroceryList />);
  });

});



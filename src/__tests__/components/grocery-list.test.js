import React from 'react';
import {shallow} from 'enzyme';
import {GroceryList} from '../../components/grocery-list';
import { expectation } from 'sinon';
import "../../__tests__/setup/setupTests"


describe('GroceryList', () => {
  
  it('Renders without crashing', () => {
    shallow(<GroceryList />);
  });

  // it('Renders something', () => {
  //   shallow(<GroceryList />);

  //   const wrapper = (<GroceryList />)
  
  //   wrapper.simulate('click'); // delete button 

  //   expect(wrapper)// expect one less item/button ?
  
  // })

});


import React from 'react';
import {shallow} from 'enzyme';
import { Ingredients } from '../../components/recipe/ingredients';
import "../../__tests__/setup/setupTests"

describe('Ingredients', () => {
  
  it('Renders without crashing', () => {
    shallow(<Ingredients />);
  });

  // it('Renders without crashing', () => {
  //   const wrapper = shallow(<Ingredients />);

  //   wrapper.simulate('change'); // user types letter

  //   expect(wrapper.toBe('value={item.ingredient}'))

  // });


});

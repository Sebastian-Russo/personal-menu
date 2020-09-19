import React from 'react';
import {mount} from 'enzyme';
import RecipeInput from '../../components/recipe/recipe-input';
import "../../__tests__/setup/setupTests"

describe('RecipeInput', () => {
  
  it('Renders without crashing', () => {

    const ingredient = "sugar"
    const amount = "1 cup"

    mount(<RecipeInput 
      ingredient={ingredient}
      amount={amount}
    />);
  
  });

  // it('Add button add ingredient', () => {

  //   const ingredient = "sugar"
  //   const amount = "1 cup"
  //   const handleClick = jest.fn();

  //   const wrapper = mount(<RecipeInput 
  //     ingredient={ingredient}
  //     amount={amount}
  //     handleClick={handleClick}
  //   />);
  
  //   const value = 'ingredient';

  //   wrapper.simulate('click');

  //   expect(handleClick).toHaveBeenCalled();
  //   expect(state('ingredient').toHaveBeenCalledWith(value));

  // });

});


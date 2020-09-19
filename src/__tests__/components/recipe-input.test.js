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

  it('Add button fires addIngredientAndAmout handler', () => {

    const ingredient = "sugar"
    const amount = "1 cup"
    const htmlFor = "ingredient"
    const id = "ingredient"
    const value = "ingredient"
    const addIngredientAndAmount = jest.fn();

    const wrapper = mount(<RecipeInput 
      ingredient={ingredient}
      amount={amount}
      htmlFor={htmlFor}
      id={id}
      value={value}
      addIngredientAndAmount={addIngredientAndAmount}
    />);
  
    const handleClick = wrapper.find('.button')
    handleClick.simulate('click');
 
    expect(addIngredientAndAmount).toHaveBeenCalled();

  });

});


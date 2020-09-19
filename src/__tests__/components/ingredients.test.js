import React from 'react';
import {shallow, mount} from 'enzyme';
import Ingredients from '../../components/recipe/ingredients';
import "../../__tests__/setup/setupTests"

describe('Ingredients', () => {

  it('Renders without crashing', () => {
    
    const ingredients = [
      {
      ingredient: 'sugar',
      amount: '1 cup'
      },
      {
        ingredient: 'sunshine',
        amount: '1 cup'
      }
    ]

    const handleIngredientChange = jest.fn();

    shallow( <Ingredients 
      ingredients={ingredients}
      handleIngredientChange={handleIngredientChange}
      />
    );
  });

  // it('adds ingredient', () => {

  //   const ingredients = [
  //     {
  //     ingredient: 'sugar',
  //     amount: '1 cup'
  //     },
  //     {
  //       ingredient: 'sunshine',
  //       amount: '1 cup'
  //     }
  //   ]

  //   const handleIngredientChange = jest.fn();
    
  //   const wrapper = shallow( <Ingredients 
  //     ingredients={ingredients}
  //     handleIngredientChange={handleIngredientChange}
  //     />
  //   )
    
  //   wrapper.simulate('click')

  //   expect(handleIngredientChange).toHaveBeenCalled();
  //   // expect(ingredients).toEqual([{"amount": "1 cup", "ingredient": "sugar"}, {"amount": "1 cup", "ingredient": "sunshine"}])

  // });

  // it('Clicking delete button removes item', () => {

  //   const ingredients = [
  //     {
  //     ingredient: 'sugar',
  //     amount: '1 cup'
  //     },
  //     {
  //       ingredient: 'sunshine',
  //       amount: '1 cup'
  //     }
  //   ]

  //   const deleteIngredientAndAmount = jest.fn();

  //   const wrapper = mount( <Ingredients 
  //     ingredients={ingredients}
  //     onClick={deleteIngredientAndAmount}
  //     />
  //   )
    
  //   wrapper.simulate('click');

  //   expect(deleteIngredientAndAmount).toHaveBeenCalled();
  //     // why isn't this being called??
  // });
    
});
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

  it('adds all 3 sets of ingredient', () => {

    const ingredients = [
      {
      ingredient: 'sugar',
      amount: '1 cup'
      },
      {
        ingredient: 'spice',
        amount: '1 cup'
      },
      {
        ingredient: 'everything nice',
        amount: '1 cup'
      }
    ]

    const handleIngredientChange = jest.fn();
    
    const wrapper = shallow( <Ingredients 
      ingredients={ingredients}
      handleIngredientChange={handleIngredientChange}
      />
    )
    
    const checked = wrapper.find('.form-input');

    expect(checked).toHaveLength(3)
  });
    
});
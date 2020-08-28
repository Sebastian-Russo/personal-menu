import React from 'react';
import {shallow} from 'enzyme';
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



});

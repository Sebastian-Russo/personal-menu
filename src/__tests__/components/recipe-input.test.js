import React from 'react';
import {mount} from 'enzyme';
import RecipeInput from '../../components/recipe/recipe-input';
import "../../__tests__/setup/setupTests"

describe('RecipeInput', () => {
  
  it('Renders without crashing', () => {

    const state = {
      ingredient: "",
      amount: ""
    }

    const ingredient = "sugar"
    const amount = "1 cup"
    const addIngredientAndAmount = state;

    mount(<RecipeInput 
      state={state}
      ingredient={ingredient}
      amount={amount}
      addIngredientAndAmount={addIngredientAndAmount}

      />);
  
  });

});


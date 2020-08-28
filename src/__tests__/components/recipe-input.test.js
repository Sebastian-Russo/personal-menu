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

});


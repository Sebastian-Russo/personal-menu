import React from 'react';
import {shallow} from 'enzyme';
import { RecipeInput } from '../../components/recipe/recipe-input';
import "../../__tests__/setup/setupTests"

describe('RecipeInput', () => {
  
  it('Renders without crashing', () => {
    shallow(<RecipeInput />);
  });

});

// Lifecycle methods need full DOM rendering 

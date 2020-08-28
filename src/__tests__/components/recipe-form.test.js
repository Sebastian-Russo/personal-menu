import React from 'react';
import {shallow} from 'enzyme';
import { RecipeForm } from '../../components/recipe/recipe-form';
import "../../__tests__/setup/setupTests"

describe('RecipeForm', () => {
  
  it('Renders without crashing', () => {
    shallow(<RecipeForm />);
  });

});

// Lifecycle methods need full DOM rendering 

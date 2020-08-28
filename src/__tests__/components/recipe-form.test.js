import React from 'react';
import {shallow} from 'enzyme';
import { RecipeForm } from '../../components/recipe/recipe-form';
import "../../__tests__/setup/setupTests"
import store from '../../store'

describe('RecipeForm', () => {
  
  it('Renders without crashing', () => {
    shallow(<RecipeForm store={store} />);
  });

});

// Lifecycle methods need full DOM rendering 

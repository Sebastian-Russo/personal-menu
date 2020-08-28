import React from 'react';
import {shallow} from 'enzyme';
import { NewCategory } from '../../components/recipe/new-category';
import "../../__tests__/setup/setupTests"

describe('NewCategory', () => {
  
  it('Renders without crashing', () => {
    shallow(<NewCategory />);
  });

});

import React from 'react';
import {shallow} from 'enzyme';
import YourMenuCategory from '../../src/components/your-menu-category';

describe('YourMenuCategory', () => {
  
  it('Renders without crashing', () => {
    shallow(<YourMenuCategory />);
  });

});



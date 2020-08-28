import React from 'react';
import {shallow} from 'enzyme';
import YourMenuCategory from '../../components/your-menu-category';
import "../../__tests__/setup/setupTests"

describe('YourMenuCategory', () => {
  
  it('Renders without crashing', () => {
    shallow(<YourMenuCategory />);
  });

});



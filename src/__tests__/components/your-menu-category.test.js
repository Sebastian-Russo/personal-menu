import React from 'react';
import {shallow} from 'enzyme';
import YourMenuCategory from '../../components/your-menu-category';
import "../../__tests__/setup/setupTests"
import store from '../../store'

describe('YourMenuCategory', () => {
  
  it('Renders without crashing', () => {
    shallow(<YourMenuCategory store={store} />);
  });

});



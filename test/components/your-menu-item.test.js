import React from 'react';
import {shallow} from 'enzyme';
import YourMenuItem from '../../src/components/your-menu-item';

describe('YourMenuItem', () => {
  
  it('Renders without crashing', () => {
    shallow(<YourMenuItem />);
  });

});



import React from 'react';
import {shallow} from 'enzyme';
import YourMenuItem from '../../components/your-menu-item';
import "../../__tests__/setup/setupTests"

describe('YourMenuItem', () => {
  
  it('Renders without crashing', () => {
    shallow(<YourMenuItem />);
  });

});


// Lifecycle methods need full DOM rendering 

import React from 'react';
import {shallow} from 'enzyme';
import YourMenu from '../../components/your-menu';
import "../../__tests__/setup/setupTests"

describe('YourMenu', () => {
  
  it('Renders without crashing', () => {
    shallow(<YourMenu />);
  });

});


// Lifecycle methods need full DOM rendering 

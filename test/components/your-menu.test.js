import React from 'react';
import {shallow} from 'enzyme';
import YourMenu from '../../src/components/your-menu';

describe('YourMenu', () => {
  
  it('Renders without crashing', () => {
    shallow(<YourMenu />);
  });

});



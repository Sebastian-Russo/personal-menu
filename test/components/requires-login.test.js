import React from 'react';
import {shallow} from 'enzyme';
import RequiresLogin from '../../src/components/requires-login';

describe('RequiresLogin', () => {
  
  it('Renders without crashing', () => {
    shallow(<RequiresLogin />);
  });

});



import React from 'react';
import {shallow} from 'enzyme';
import RequiresLogin from '../../components/requires-login';
import "../../__tests__/setup/setupTests"

describe('RequiresLogin', () => {
  
  it('Renders without crashing', () => {
    shallow(<RequiresLogin />);
  });

});



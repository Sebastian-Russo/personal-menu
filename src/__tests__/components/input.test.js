import React from 'react';
import {shallow} from 'enzyme';
import Input from '../../components/input';
import "../../__tests__/setup/setupTests"


describe('Input', () => {
  
  it('Renders without crashing', () => {
    shallow(<Input />);
  });

});


// Lifecycle methods need full DOM rendering 

import React from 'react';
import {shallow} from 'enzyme';
import { App } from '../../components/app';
import "../../__tests__/setup/setupTests"


describe('App', () => {
  
  it('Renders without crashing', () => {
    shallow(<App />);
  });

});

// expect().toBe()
// expect something, to be something

// Lifecycle methods need full DOM rendering  

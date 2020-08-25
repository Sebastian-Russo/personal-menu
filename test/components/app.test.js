import React from 'react';
import {shallow} from 'enzyme';
import App from '../../src/components/app';

describe('App', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });

});



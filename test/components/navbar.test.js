import React from 'react';
import {shallow} from 'enzyme';
import Navbar from '../../src/components/navbar';

describe('Navbar', () => {
  
  it('Renders without crashing', () => {
    shallow(<Navbar />);
  });

});



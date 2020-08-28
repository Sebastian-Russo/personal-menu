import React from 'react';
import {shallow} from 'enzyme';
import Navbar from '../../components/navbar';
import "../../__tests__/setup/setupTests"

describe('Navbar', () => {
  
  it('Renders without crashing', () => {
    shallow(<Navbar />);
  });

});



import React from 'react';
import {mount} from 'enzyme';
import Input from '../../components/input';
import "../../__tests__/setup/setupTests"


describe('Input', () => {
  
  it('Renders without crashing', () => {
    
    const meta = {
      active: false,
      touched: false
    }

    const input = 'breakfast';
    const label = 'breakfast';
    const name = 'pizza';

    mount(<Input 
      meta={meta}
      input={input}
      label={label}
      name={name}
      />);
  });

});

// Since field is a HoC, it will be passing its own props 
// to that component along with whatever others you declare

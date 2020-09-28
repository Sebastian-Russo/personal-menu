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
    const htmlFor = 'pizza';

    mount(<Input 
      meta={meta}
      input={input}
      label={label}
      htmlFor={htmlFor}
      />);
  });

// Since field is a HoC, it will be passing its own props 
// to that component along with whatever others you declare

  it('Should render breakfast input', () => {
    
    const meta = {
      active: false,
      touched: false
    }

    const input = ['breakfast','lunch', 'dinner'];
    const label = 'breakfast';
    const name = 'pizza';

    const wrapper = mount(<Input 
      meta={meta}
      input={input}
      label={label}
      name={name}
      />);

    expect(wrapper.find(Input)).toHaveLength(1)

  });

});



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

// Since field is a HoC, it will be passing its own props 
// to that component along with whatever others you declare

  it('Renders without crashing', () => {
    
    const meta = {
      active: false,
      touched: false
    }

    const input = 'breakfast';
    const label = 'breakfast';
    const name = 'pizza';

    const wrapper = mount(<Input 
      meta={meta}
      input={input}
      label={label}
      name={name}
      />);

    expect(wrapper.find(Input)).toHaveLength(1)
    expect(wrapper.instance().refInput).toEqual('breakfast');
    // why is input undeifined? 
  });

});



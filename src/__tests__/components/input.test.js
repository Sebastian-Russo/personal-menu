import React from 'react';
import {mount} from 'enzyme';
import Input from '../../components/input';
import "../../__tests__/setup/setupTests"


describe('Input', () => {
  
  it('Renders without crashing', () => {
    
    const touched = true;
    const active = true;
    const meta
    const input = 'breakfast';
    const label = 'breakfast';
    const name = 'pizza';

    mount(<Input 
      touched={touched}
      active={active}
      meta={meta}
      input={input}
      label={label}
      name={name}
      />);
  });

});


// Lifecycle methods need full DOM rendering 

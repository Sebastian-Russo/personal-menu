import React from 'react';
import {shallow} from 'enzyme';
import LoginForm from '../../components/login-form';
import "../../__tests__/setup/setupTests"

describe('LoginForm', () => {
  
  it('Renders without crashing', () => {
    shallow(<LoginForm />);
  });

  // it('Renders without crashing', () => {
  //   const wrapper = shallow(<LoginForm />);

  //   wrapper.simulate('click');

  //   expect(wrapper.)

  // });

});



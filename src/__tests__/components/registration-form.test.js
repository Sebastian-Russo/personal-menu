import React from 'react';
import {shallow} from 'enzyme';
import RegistrationForm from '../../components/registration-form';
import "../../__tests__/setup/setupTests"

describe('RegistrationForm', () => {
  
  it('Renders without crashing', () => {
    shallow(<RegistrationForm />);
  });

});



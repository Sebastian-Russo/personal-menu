import React from 'react';
import {shallow} from 'enzyme';
import RegistrationForm from '../../src/components/registration-form';

describe('RegistrationForm', () => {
  
  it('Renders without crashing', () => {
    shallow(<RegistrationForm />);
  });

});



import React from 'react';
import {shallow} from 'enzyme';
import YourMenuItem from '../../components/your-menu-item';
import "../setup/setupTests"
import store from '../../store'

describe('YourMenuItem', () => {
  
  it('Renders without crashing', () => {
    shallow(<YourMenuItem store={store} />);
  });

});


// Lifecycle methods need full DOM rendering 

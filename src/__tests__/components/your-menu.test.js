import React from 'react';
import {shallow} from 'enzyme';
import YourMenu from '../../components/your-menu';
import "../../__tests__/setup/setupTests"
import store from '../../store'

describe('YourMenu', () => {
  
  it('Renders without crashing', () => {
    shallow(<YourMenu store={store} />);
  });

});


// Lifecycle methods need full DOM rendering 

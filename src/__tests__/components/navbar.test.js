import React from 'react';
import {shallow} from 'enzyme';
import Navbar from '../../components/navbar';
import "../../__tests__/setup/setupTests"
import store from '../../store'

describe('Navbar', () => {
  
  it('Renders without crashing', () => {
    const loggedIn = true;
    const authToken = 1234;
    const userId = 1234;
    const groceryList = ['item1', 'item2', 'item3']

    shallow(<Navbar  
      store={store}
      loggedIn={loggedIn}
      authToken={authToken}
      userId={userId}
      groceryList={groceryList}
      />);
  });

});



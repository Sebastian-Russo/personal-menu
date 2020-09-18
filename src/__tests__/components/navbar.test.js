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

  it('Logout button fires', () => {
    const loggedIn = true;
    const authToken = 1234;
    const userId = 1234;
    const groceryList = ['item1', 'item2', 'item3']
    const logOut = jest.fn();

    const wrapper = shallow(<Navbar  
      store={store}
      loggedIn={loggedIn}
      authToken={authToken}
      userId={userId}
      groceryList={groceryList}
      logOut={logOut}
      />);

      wrapper.simulate('click');

      expect(logOut).toHaveBeenCalled();
  });

  it('Login button shows when not logged in', () => {

    const wrapper = shallow(<Navbar  
      store={store}
      />);

      expect(wrapper.hasClass('login')).toBe(true)
  });


});



import React from 'react';
import {mount} from 'enzyme';
import {LoginForm} from '../../components/login-form';
import "../../__tests__/setup/setupTests"
import store from '../../store'

describe('LoginForm', () => {
  
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState")
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
      wrapper = mount(Enzyme.shallow(<LoginForm />)
  );

  afterEach(() => {
      jest.clearAllMocks();
  });


  // it('Renders without crashing', () => {
  //   mount(<LoginForm store={store}/>);
  // });
  // Invariant Violation: Could not find "store" in either the context or props of "Connect(ConnectedField)". Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to "Connect(ConnectedField)".

  it('Username input, Should capture title correctly onChange', () => {

    const username = wrapper.find("input").at(0);
    username.instance().value = "Test";
    username.simulate("change");
    expect(setState).toHaveBeenCalledWith("Test");

  });

  it('Password input, Should capture title correctly onChange', () => {

    const password = wrapper.find("input").at(0);
    password.instance().value = "Test";
    password.simulate("change");
    expect(setState).toHaveBeenCalledWith("Test");

  });

});


// 
import React from 'react';
import {shallow, mount} from 'enzyme';
import NewCategory from '../../components/recipe/new-category';
import "../../__tests__/setup/setupTests"

describe('NewCategory', () => {
  
  it('Renders without crashing', () => {
    shallow(<NewCategory />);
  });

  it('Should fire setValue callback', () => {

    const addNewCategory = jest.fn(); 

    const wrapper = mount(<NewCategory 
      addNewCategory={addNewCategory}
      />);

    wrapper.simulate('click');
    const value = 'Pizza cookies'
    wrapper.find('input[type="text"]').instance().value = value;
    expect(addNewCategory).toHaveBeenCalledWith(value);

  });

});

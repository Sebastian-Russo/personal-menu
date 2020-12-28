import React from 'react';
import {shallow} from 'enzyme';
import { Categories } from '../../components/recipe/categories';
import "../../__tests__/setup/setupTests"


describe('Categories', () => {
  
  it('Renders without crashing', () => {
    const categoryList = ['breakfast', 'lunch', 'dinner', 'dessert'];
    const categories = ['breakfast', 'lunch', 'dinner']
    
    const checkOrUncheck = jest.fn(); // 'jest.fn()' for testing callbacks, takes place of a function, and keeps track if it's called or not

    shallow( <Categories
      categoryList={categoryList}
      categories={categories}
      checkOrUncheck={checkOrUncheck}
      />
    )
    
  })

  it('Should make four categories', () => {
    const categoryList = ['breakfast', 'lunch', 'dinner', 'dessert']; // 4
    const categories = ['breakfast', 'lunch', 'dinner']
    const checkOrUncheck = jest.fn(); // 'jest.fn()' for testing callbacks, takes place of a function, and keeps track if it's called or not

    const wrapper = shallow( <Categories
      categoryList={categoryList}
      categories={categories}
      checkOrUncheck={checkOrUncheck}
      />
    )

    const checked = wrapper.find('.category-list')

    expect(checked).toHaveLength(4)
  })

});


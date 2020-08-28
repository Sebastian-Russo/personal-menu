import React from 'react';
import {shallow} from 'enzyme';
import { Categories } from '../../components/recipe/categories';
import "../../__tests__/setup/setupTests"


describe('Categories', () => {
  
  it('Renders without crashing', () => {
    const categoryList = ['breakfast', 'lunch', 'dinner', 'dessert'];
    const categories = ['breakfast', 'lunch', 'dinner']
    
    const checkOrUncheck = jest.fn(); // 'jest.fn()' takes place of a function, and keeps track if it's called or not

    shallow( <Categories
      categoryList={categoryList}
      categories={categories}
      checkOrUncheck={checkOrUncheck}
      />
    )
    
  })

});

// Testing props is essentially is testing that react is working
// You want to test the components that are rendered and make sure 
// that they look like how you want, so write elements, classNames, keys, id’s, etc
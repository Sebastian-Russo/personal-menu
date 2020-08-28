import React from 'react';
import {shallow} from 'enzyme';
import { Categories } from '../../components/recipe/categories';
import "../../__tests__/setup/setupTests"


describe('Categories', () => {
  
  it('Renders without crashing', () => {
    shallow(<Categories />);
  });

  // it('Renders components', () => {
  //   const wrapper = shallow((
  //     <div>
  //       {['breakfast'].map((i) => <li key={`${category}-${i}`}> </li>)}    
  //     </div>
  //   )).find('li')

  //   expect(wrapper.at(0).key()).to.equal('breakfast');

  // })


});

// Testing props is essentially is testing that react is working
// You want to test the components that are rendered and make sure 
// that they look like how you want, so write elements, classNames, keys, id’s, etc
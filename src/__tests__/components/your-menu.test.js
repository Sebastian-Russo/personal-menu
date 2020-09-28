import React from 'react';
import {mount} from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import {YourMenu} from '../../components/your-menu';
import "../../__tests__/setup/setupTests"
import store from '../../store'

describe('YourMenu', () => {
  
  it('Renders without crashing', () => {
    mount(<Router><YourMenu store={store} /></Router>);
  });

  it('Renders all components', () => {
  
    const categoryList = ['breakfast', 'lunch', 'dinner', 'snacks'];
    const menuItems = [
      {
        "name": "hotdog",
        "categories": ["lunch", "dinner", "snacks", "quick-and-easy"],
        "ingredients": [
            {
                "ingredient": "hotdogs",
                "id": 1,
                "amount": "2"
            },
            {
                "ingredient": "bun",
                "id": 2,
                "amount": "2"
            }
        ],
        "directions": "grill, boil, or fry for two minutes, then place in bun",
        "userId": "5f2aa35d43ea5564f76bd73f"
      }
    ]
    const userId = "5f2aa35d43ea5564f76bd73f";
    const authToken = 1234;
    const dispatch = jest.fn();
  
    mount(<Router>
      <YourMenu 
      store={store} 
      categoryList={categoryList}
      menuItems={menuItems}
      userId={userId}
      authToken={authToken}  
      dispatch={dispatch}
    />
    </Router>);
    
  });

});

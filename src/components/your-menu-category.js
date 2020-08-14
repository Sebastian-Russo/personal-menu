import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { getRecipes } from '../actions';
import './your-menu-category.css'

export class YourMenuCategory extends React.Component {   

    // whenever the component loads for the recipes, you will make the request for them
    // componentDidMount() {
    //     console.log('getting recipes', this.props.authToken)
    //     if (this.props.userId) { 
    //         this.props.dispatch(getRecipes(this.props.authToken, this.props.userId))
    //     }
    // }
    
    
/* 
undateMenuItem()
addRecipe()

- both are called successfully in 'recipe-form', the redirect to ‘your-menu-category’ for adding an item fires before the new category and/or menuItem can be added to state
- i know this because, if you comment out redirect for addRecipe, then go to ‘your-menu-categories’, you still get the error, but after you refresh the page, it renders correctly 
- so maybe there’s an issue with getting local state, or the new menuItem getting to the store/global state before the render causing the undefined 

- the question is, where/when does ‘your-menu-categories’ receive props for the new menuItem… the menu reducer? local state? 
- seems like it’s not necessary for the edit menu since it’s already there in state, by the time another render goes by everything is updated with any additional info 

- i think i new to add getRecipes to the addRecipes action 
- i think addRecipes is going to the db, but the ‘your-menu-categories’ is searching for it in state or local storage, before it’s been retrieved from the db and brought back to the store 

- i added getRecipes to the end of addRecipes action to call immediately after, so to retrieve the proper state before ‘your-menu-categories’ renders, but it still came up with the error 
- there's also a componentDidMount() at calls getRecipes in this component, which should have called it soon enough but didn't
*/

    render() {
        
        console.log(this.props)
        const menuItems = this.props.menuItems;
    
        // menu item from selected category              (i.e. 'item = breakfast')
        const selectedCategory = this.props.categoryList.filter(item => item === this.props.match.params.category)[0];
        console.log(selectedCategory)
        
        // menu items from selected category
        const selectedMenuItems = menuItems  
        // error: CANNOT READ PROPERTY 'FIND' of undefined, aka menuItem.categores comes up undefined
        ? menuItems.filter(menuItem => menuItem.categories.find(category => { 
            // console.log(menuItems, menuItem.categories)
            console.log('need to load new recipe before this point, have getRecipes called before here')
            return category === selectedCategory }))
        : [];
    
        // list of menu items from selected category
        const menuItem = selectedMenuItems.map((item, i) => {
            return (
                <div key={`menu-item-${i}`}>
                    <Link to={`/your-menu/${selectedCategory}/${item.id}`}>
                        {item.name}
                    </Link>
                </div>
            )
        });

        return (
            <div className="container-categories">
                <h1>{selectedCategory}</h1>
                <div>{menuItem}</div>
                <Link to={`/your-menu`}><h4>Back to Categories</h4></Link>
            </div>
        ); 
    };
}
const mapStateToProps = state => ({
    categoryList: state.category.categoryList,
    menuItems: state.menu.menuItems,
    userId: state.auth.id,
});

export default connect(mapStateToProps)(YourMenuCategory)
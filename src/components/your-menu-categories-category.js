import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function YourMenuCategoriesCategory(props) {    
    const menuItems = props.menuItems;
   
    const selectedCategory = props.categoryList.filter(item => item === props.match.params.id)[0];

    const allMenuItemsWithSelectedCategory = menuItems.filter(menuItem => menuItem.categories.find(category => { 
        return category === selectedCategory }))

    const menuItem = allMenuItemsWithSelectedCategory.map((item, i) => {
        return (
            <div key={`menu-item${i}`}>
                <Link to={`/your-menu-item/${item.name}`}>
                    {item.name} 
                </Link>
            </div>
        )
    })
    
    // console.log(selectedCategory, allMenuItemsWithSelectedCategory)

    return (
        <div>
            <h3>Selected Category</h3>
            <h3>{selectedCategory}</h3>
            <div>{menuItem}</div>
        </div>
 )   
}

const mapStateToProps = state => ({
    categoryList: state.menu.categoryList,
    menuItems: state.menu.menuItems
})

export default connect(mapStateToProps)(YourMenuCategoriesCategory)
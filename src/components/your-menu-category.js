import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './your-menu-category.css'

export function YourMenuCategory(props) {   
    const menuItems = props.menuItems;
   
    const selectedCategory = props.categoryList.filter(item => item === props.match.params.category)[0];
    console.log(selectedCategory)
    const selectedMenuItems = menuItems.filter(menuItem => menuItem.categories.find(category => { 
        // console.log(menuItems, menuItem, categories)
        return category === selectedCategory }))

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

const mapStateToProps = state => ({
    categoryList: state.category.categoryList,
    menuItems: state.menu.menuItems
});

export default connect(mapStateToProps)(YourMenuCategory)
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function YourMenuCategoriesCategory(props) {   
    console.log(props) 
    const menuItems = props.menuItems;
   
    const selected = props.categoryList.filter(item => item === props.match.params.id)[0];

    const selectedMenuItems = menuItems.filter(menuItem => menuItem.categories.find(category => { 
        return category === selected }))

    const menuItem = selectedMenuItems.map((item, i) => {
        return (
            <div key={`menu-item-${i}`}>
                <Link to={`/your-menu-item/${item.id}`}>
                    {item.name} 
                </Link>
            </div>
        )
    })
    
    return (
        <div>
            <h1>{selected}</h1>
            <div>{menuItem}</div>
            <Link to={`/your-menu`}><h4>Back to Categories</h4></Link>
        </div>
    )   
}

const mapStateToProps = state => ({
    categoryList: state.menu.categoryList,
    menuItems: state.menu.menuItems
})

export default connect(mapStateToProps)(YourMenuCategoriesCategory)
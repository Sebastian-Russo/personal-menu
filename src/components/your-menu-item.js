import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// *** AKA RECIPE COMPONENT ***

export function YourMenuItem(props) {
    const {menuItems} = props;
    // why the [0] if it's the only one in the array?
    // filtered menu item obj from array of objs, by filtering params id
    // previously, i thought i'd have to map array of obj, then map array obj again, to get to ingredients obj
    const menuItem = menuItems.filter(menuItem => menuItem.name === props.match.params.id)[0];

    const ingredients = menuItem.ingredients.map((ingredient, i) => {
        return (
        <div key={`ingredients-${i}`}>{ingredient.amount} of {ingredient.ingredient}</div>
        )
    })

    const categories = menuItem.categories.map((category, i) => {
        return (
        <div key={`categories-${i}`}>{category}</div>
        )
    })
    
    return (
        <div className="menu-item">
            <h1>{menuItem.name}</h1>
            <h3>Ingredients:</h3>
            <div>{ingredients}</div>
            <h3>Directions: </h3>
            <div>{menuItem.directions}</div>

            
            <Link to={'/your-menu'}>
                <h3>Categories:</h3>
            </Link>

            <div>{categories}</div>
        </div>
    );
}

const mapStateToProps = state => ({
    menuItems: state.menu.menuItems
});

export default connect(mapStateToProps)(YourMenuItem)


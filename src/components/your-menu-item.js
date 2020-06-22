import React from 'react';
import {connect} from 'react-redux';
// *** AKA RECIPE COMPONENT ***

export function YourMenuItem(props) {
    const {menuItems} = props;
    const recipes = menuItems;
    const recipe = recipes.map(recipe => (
        <li className="menu-recipe" key={recipe.id}>
            <h2 className="menu-recipe-name">
                {recipe.name}
                {/* onClick={} */}
                </h2>
            <div className="menu-recipe-ingredients">{recipe.ingredients}</div>
            <div className="menu-recipe-steps">{recipe.steps}</div>
        </li>
    ));

    return (
        <div className="menu-items">
            <h1>Your Menu</h1>
            <h2>Categories</h2>
            <ul className="menu-recipe-list">{recipe}</ul>
        </div>
    );
}

const mapStateToProps = state => ({
    menuItems: state.menuItems
});

export default connect(mapStateToProps)(YourMenuItem)
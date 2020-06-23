import React from 'react';
import {connect} from 'react-redux';

export function YourMenuItemIngredients(props){
    const {menuItems} = props;

    const amountOfIngredient = menuItems.map(menuItem => {
        return menuItem.ingredients.map((ingredient, i) => (
            <div key={i}>
            {ingredient.amount} of {ingredient.item}
            </div>
        ))
    })

    return (
        <div className="menu-menuItem-ingredients">{amountOfIngredient}</div>
    );
}


const mapStateToProps = state => ({
    menuItems: state.menu.menuItems
});

export default connect(mapStateToProps)(YourMenuItemIngredients)

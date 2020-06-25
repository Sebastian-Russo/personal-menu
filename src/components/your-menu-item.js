import React from 'react';
import {connect} from 'react-redux';
// *** AKA RECIPE COMPONENT ***

export function YourMenuItem(props) {
    console.log(props)
    const {menuItems} = props;

    const menuItem = menuItems.filter(menuItem => menuItem.name === props.match.params.id)[0];
    const ingredients = menuItem.ingredients.map((ingredient, i) => {
        return (
        <div key={`ingredients-${i}`}>{ingredient.amount} {ingredient.ingredient}</div>
        )
    })
console.log(menuItem)
    return (
        <div className="menu-item">
            <h1>{menuItem.name}</h1>
            <div>{ingredients}</div>
        </div>
    );
}

const mapStateToProps = state => ({
    menuItems: state.menu.menuItems
});

export default connect(mapStateToProps)(YourMenuItem)

{/* 
        // <div className="menu-menuItem" key={menuItem.id}>
        //     <h2 className="menu-menuItem-name">{menuItem.name}</h2>
        //     <YourMenuItemIngredients />
        //     <br></br>
        //     <YourMenuItemSteps />
        // </div> */}
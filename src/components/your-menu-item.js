import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RecipeForm from './recipe-form';
import {editRecipe} from '../actions';
// *** AKA RECIPE COMPONENT ***

export function YourMenuItem(props) {
    
    const {menuItems} = props;
    // why the [0] if it's the only one in the array?
    // filtered menu item obj from array of objs, by filtering params id
    // previously, i thought i'd have to map array of obj, then map array obj again, to get to ingredients obj
    const menuItem = menuItems.filter(menuItem => menuItem.name === props.match.params.id)[0];
    console.log(menuItem)
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

    const handleClick = () => {
        props.dispatch(editRecipe())
    }
    
    if (props.editing === true) {
        return (
            <RecipeForm 
                menuItem={menuItem}
            />
        )
    } 
    
    if (props.editing === false) {
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
                <br></br>
                <button onClick={handleClick}>Edit Recipe</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    menuItems: state.menu.menuItems,
    editing: state.menu.editing 
});

export default connect(mapStateToProps)(YourMenuItem)


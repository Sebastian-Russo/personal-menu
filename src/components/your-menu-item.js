import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RecipeForm from './recipe-form';
import {editRecipe, deleteMenuItem} from '../actions';
// *** AKA RECIPE COMPONENT ***

export function YourMenuItem(props) {
    
    const {menuItems} = props;
    console.log(menuItems, props)

    const menuItem = menuItems.filter(menuItem => menuItem.id == props.match.params.id)[0];
    console.log(menuItem)

    const ingredients = menuItem.ingredients.map(ingredient => {
        return (
        <div key={ingredient.id}>{ingredient.amount} of {ingredient.ingredient}</div>
        )
    })

    const categories = menuItem.categories.map((category, i) => {
        return (
            <div key={`categories-${i}`}><Link to={`/your-menu-categories/${category}`}>{category}</Link></div>
        )
    })

    const handleEditClick = () => {
        props.dispatch(editRecipe())
    }
    
    const handleDeleteClick = () => {
        props.dispatch(deleteMenuItem(menuItem.id))
    }

    let render;
    if (props.editing === true) {
        return render = (
            <RecipeForm 
                menuItem={menuItem}
            />
        )
    } 
    if (props.editing === false) {
        return render = (
            <div className="menu-item">
                <h1>{menuItem.name}</h1>
                <h3>Ingredients:</h3>
                <div>{ingredients}</div>
                <h3>Directions: </h3>
                <div>{menuItem.directions}</div>
                <Link to={'/your-menu'}><h3>Categories:</h3></Link>
                <div>{categories}</div>
                <br></br>
                <button onClick={handleEditClick}>Edit Recipe</button>
                <button onClick={handleDeleteClick}>Delete Recipe</button>
            </div>
        );
    }

    return (
        <div>
            {render}
        </div>
    )
}

const mapStateToProps = state => ({
    menuItems: state.menu.menuItems,
    editing: state.menu.editing 
});

export default connect(mapStateToProps)(YourMenuItem)



// why the [0] if it's the only one in the array?
// filtered menu item obj from array of objs, by filtering params id
// previously, i thought i'd have to map array of obj, then map array obj again, to get to ingredients obj
// const menuItem = menuItems.filter(menuItem => menuItem.id === props.match.params.id)[0];
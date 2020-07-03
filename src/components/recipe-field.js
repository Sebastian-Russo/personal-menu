import React from 'react';
import {connect} from 'react-redux';

export function RecipeField(props){
    const {menuItem} = props;
    console.log(menuItem)
    
    const ingredients = menuItem.ingredients.map((ingredient, i) => {
        return (
            <div key={ingredient.id}>
                <div>
                    {ingredient.amount} of {ingredient.ingredient}
                </div>
                <button onClick={() => {props.deleteIngredientAndAmount(ingredient.id)}}>
                    Delete 
                </button>
            </div>
        )
    })

    return(
        <div>
            <div>Your Recipe so far...</div>
            {ingredients}
        </div>
    )
}

const mapStateToProps = state => ({
    menuItems: state.menuItems
})

export default connect(mapStateToProps)(RecipeField)
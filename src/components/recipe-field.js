import React from 'react';

export default function RecipeField(props){
    const {menuItem} = props;
        
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

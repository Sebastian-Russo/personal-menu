import React from 'react';

export default function(props){
    const {menuItem} = props;
    
    const ingredients = menuItem.ingredients.map((ingredientAndAmount, i) => {
        return (
            <div key={ingredientAndAmount.id}>
                <div>
                    {ingredientAndAmount.amount} of {ingredientAndAmount.ingredients}
                </div>
                <button onClick={() => {props.deleteIngredientAndAmount(ingredientAndAmount.id)}}>
                    Delete 
                </button>
            </div>

        )
    })

    return(
        <div>
            <div>Your Recipe so far...</div>
            <div>{ingredients}</div>
        </div>
    )
}

import React from 'react';

export default function(props){
    const {recipe} = props;

    const ingredients = recipe.ingredients.map((ingredient, i) => {
        return (
            <div key={`ingredients-${i}`}>
                {ingredient.amount} of {ingredient.ingredients}
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

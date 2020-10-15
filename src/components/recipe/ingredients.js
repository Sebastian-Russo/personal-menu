import React from "react";

export default function Ingredients(props) {
  let title;
  
  if (props.ingredients.length) {
    title = <h3>Ingredients</h3>
  }

  return (
    <div>
      {title}
      {props.ingredients.map((item, i) => {
        return (
          <div className="form-input" key={`ingredient-${i}`}>
            <label htmlFor="ingredient"> Ingredient </label>
            <input
              className="input"
              name={item.ingredient}
              id={item.id}
              type="text"
              value={item.ingredient}
              onChange={e => props.handleIngredientChange(e, i, "ingredient")}
            />
            <label htmlFor="amount"> Amount </label>
            <input
              name={item.amount}
              id={item.id}
              type="text"
              value={item.amount} // controlled component when using value in input
              onChange={e => props.handleIngredientChange(e, i, "amount")}
            />
            <button className="delete-button"
              type="button"
              onClick={e => props.deleteIngredientAndAmount(e, item._id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

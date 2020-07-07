import React from 'react'; 

export default function RecipeCategories(props) {
    // connect this component to store, then use categoryList
        const categories = [
            "breakfast",
            "lunch",
            "dinner",
            "snacks",
            "quick-and-easy",
            "dessert"
        ].map((cat, i) => {
            const label = cat[0].toUpperCase() + cat.slice(1);
            const checked = props.categories.includes(cat)
            return (
                <div key={`${cat}-${i}`}>
                    <input 
                        name={cat}
                        id={cat}
                        type="checkbox"
                        value={cat}
                        checked={checked}
                        onChange={(e) => props.addCategory(e)}                    />
                    <label htmlFor={cat}>{label.replace(/-/g, ' ')}</label>
                    <br></br>
                </div>
            )
        })

        return (
            <div>
                {categories}
            </div>
        )
}

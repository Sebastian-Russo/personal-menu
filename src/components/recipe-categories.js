import React from 'react'; 

export default function RecipeCategories(props) {

        const categories = [
            "breakfast",
            "lunch",
            "dinner",
            "snacks",
            "quick-and-easy",
            "dessert"
        ].map((cat, i) => {
            const label = cat[0].toUpperCase() + cat.slice(1);
            return (
                <div key={`${cat}-${i}`}>
                    <input 
                        name={cat}
                        id={cat}
                        type="checkbox"
                        value={cat}
                        // onChange={props.handeChangeCheckCategories()}
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

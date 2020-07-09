import React from 'react'; 
import {connect} from 'react-redux';

export function RecipeCategories(props) {
        
        const categories = props.categoryList.map((cat, i) => {
            const label = cat[0].toUpperCase() + cat.slice(1);
            // while looping through with map, 
            // see if the props category array includes that cat
            // returns true or false, checked prop shows true or false 
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

const mapStateToProps = state => ({
    categoryList: state.menu.categoryList
})

export default connect(mapStateToProps)(RecipeCategories)
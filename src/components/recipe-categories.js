import React from 'react'; 
import {connect} from 'react-redux';

export function RecipeCategories(props) {
        console.log('recipe categories', props);
        const categories = props.categoryList.map((category, i) => {
            const label = category[0].toUpperCase() + category.slice(1);
            // while looping through categoryList with map, 
            // see if the array includes that category
            // returns true or false, checked prop shows true or false 
            // const checked = props.categoryList.includes(category)
            // const checked = categories.includes(category)
            return (
                <div key={`${category}-${i}`} className="ingredient-list">
                    <input 
                        name={category}
                        id={category}
                        type="checkbox"
                        value={category}
                        checked={checked}
                        onChange={(e) => props.addCategory(e)}                    />
                    <label htmlFor={category}>{label.replace(/-/g, ' ')}</label>
                    <br></br>
                </div>
            )
        })

        return (
            <div className="box-category">
                {categories}
            </div>
        )
}

const mapStateToProps = state => ({
    categoryList: state.category.categoryList
})

export default connect(mapStateToProps)(RecipeCategories)
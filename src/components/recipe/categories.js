import React from 'react';
import {connect} from 'react-redux';

function Categories(props) {
  const { categoryList, categories } = props;
  const allCats = [...new Set([...categoryList, ...categories])];
  return allCats.map((category, i) => {
    const checked = categories.includes(category);
    const label = category[0].toUpperCase() + category.slice(1);
    return (
        <div key={`${category}-${i}`} className="ingredient-list">
            <input 
                name={category}
                id={category}
                type="checkbox"
                value={category}
                checked={checked}
                onChange={(e) => props.checkOrUncheck(e)} />
            <label htmlFor={category}>{label.replace(/-/g, ' ')}</label>
            <br></br>
        </div>
    )
  })
}

const mapStateToProps = state => ({
  categoryList: state.category.categoryList,
})

export default connect(mapStateToProps)(Categories);
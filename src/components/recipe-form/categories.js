import React from 'react';
import {connect} from 'react-redux';

export function Categories(props) {
  const { categoryList, categories } = props;
  // console.log('category props', props)
      return categoryList.map((category, i) => {
          const checked = categories.includes(category);
          const label = category[0].toUpperCase() + category.slice(1);
            return (
                <div key={`${category}-${i}`} 
                     className="category-list" >
                    <input 
                        name={category}
                        id={category}
                        type="checkbox"
                        value={category}
                        checked={checked}
                        onChange={(e) => props.checkOrUncheck(e)} 
                      /> 
                    <label 
                    className="category-list"
                    htmlFor={category}>{label.replace(/-/g, ' ')}
                    </label>
                </div>
            )
      })
}

const mapStateToProps = state => ({
  categoryList: state.users.categoryList,
})

export default connect(mapStateToProps)(Categories); 
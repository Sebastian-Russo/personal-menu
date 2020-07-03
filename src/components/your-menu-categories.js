import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function YourMenuCategories(props) {
    const categories = props.categoryList.map((category, i) => {
        return (
            <div key={`categories-${i}`}>
                <h3>
                    <Link to={`/your-menu-categories/${category}`}>
                        {category}
                    </Link>
                </h3>
            </div>
        )
    })
     
    return (
        <div>
            <h3>Categories: </h3>
            <div>{categories}</div>
        </div>
    )   
}

const mapStateToProps = state => ({
    categoryList: state.menu.categoryList
})

export default connect(mapStateToProps)(YourMenuCategories)
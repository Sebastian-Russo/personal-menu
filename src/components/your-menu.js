import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './your-menu.css'

export function YourMenu({categoryList, username}) {

    let categories;
    if (categoryList && categoryList.length) {
      categories = categoryList.map((category, i) => {
        return (
            <div key={`categories-${i}`}>
                <h3>
                    <Link to={`/your-menu/${category}`} className="category-text">
                        {category}
                    </Link>
                </h3>
            </div>
        )
      })
    }
    
    return (
        <div className="menu-items container">
            <h1 className="your-menu">{`${username}'s`} Menu</h1>
            <div>{categories}</div>
        </div>
    );
    
}

const mapStateToProps = state => ({
    categoryList: state.category.categoryList,
    username: state.auth.username
})

export default connect(mapStateToProps)(YourMenu)
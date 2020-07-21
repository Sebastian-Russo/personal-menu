import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './your-menu.css'

export function YourMenu({categoryList}) {

    console.log(categoryList)
    const categories = categoryList.map((category, i) => {
        return (
            <div key={`categories-${i}`}>
                <h3>
                    <Link to={`/your-menu-category/${category}`} className="category-text">
                        {category}
                    </Link>
                </h3>
            </div>
        )
    })
    
    return (
        <div className="menu-items container">
            <h1 className="your-menu">Your Menu</h1>
            <div>{categories}</div>
        </div>
    );
    
}

const mapStateToProps = state => ({
    categoryList: state.menu.categoryList
})

export default connect(mapStateToProps)(YourMenu)
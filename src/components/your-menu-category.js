import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { getRecipes } from '../actions';
import './your-menu-category.css'

export class YourMenuCategory extends React.Component {   

    // componentDidMount() {
    //     console.log('getting recipes', this.props.authToken)
    //     if (this.props.userId) { 
    //         this.props.dispatch(getRecipes(this.props.authToken, this.props.userId))
    //     } 
        
    //     if (this.props.userId) {
    //         console.log(this.props.userId)
    //     }

    //     if (!this.props.userId) {
    //         console.log(this.props.userId)
    //     }
    // }

    render() {
        
        console.log(this.props)
        const menuItems = this.props.menuItems;
    
        // menu item from selected category              (i.e. 'item = breakfast')
        const selectedCategory = this.props.categoryList.filter(item => item === this.props.match.params.category)[0];
        console.log(selectedCategory)
        
        // menu items from selected category
        const selectedMenuItems = menuItems 
        ? menuItems.filter(menuItem => menuItem.categories.find(category => { 
            return category === selectedCategory }))
        : [];
        console.log(selectedMenuItems)
    
        // list of menu items from selected category
        const menuItem = selectedMenuItems.map((item, i) => {
            return (
                <div key={`menu-item-${i}`}>
                    <Link to={`/your-menu/${selectedCategory}/${item.id}`}>
                        {item.name}
                    </Link>
                </div>
            )
        });

        return (
            <div className="container-categories">
                <h1>{selectedCategory}</h1>
                <div>{menuItem}</div>
                <Link to={`/your-menu`}><h4>Back to Categories</h4></Link>
            </div>
        ); 
    };
}
const mapStateToProps = state => ({
    categoryList: state.auth.categoryList,
    menuItems: state.menu.menuItems,
    userId: state.auth.id,
    authToken: state.auth.authToken
});

export default connect(mapStateToProps)(YourMenuCategory)
import React from 'react'; 
import {connect} from 'react-redux';

export function GroceryList(props) {
    console.log(props)

    const items = props.groceryList;

    return (
        <div>
            <h1>Grocery List</h1>
            <div>{items}</div>
        </div>
    )
}

const mapStateToProps = state => ({
    groceryList: state.menu.GroceryList,
    categoryList: state.menu.categoryList
})

export default connect(mapStateToProps)(GroceryList);
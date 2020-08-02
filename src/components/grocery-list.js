import React from 'react'; 
import {connect} from 'react-redux';
import {deleteItemFromGroceryList} from '../actions';
import './grocery-list.css'

export function GroceryList(props, {groceryList}) {


    const items = props.groceryList.map((item, i) => {
        return (
            <div className="box-grocery-list" key={`item-${i}`}>
                <div className="grocery-item">{item}</div>
                <button 
                    className="button-delete-grocery-item"
                    type="button"
                    // onClick={props.dispatch(deleteItemFromGroceryList(item))}
                    >Delete Item</button>
            </div>
        )
    })

    return (
        <div className="container-grocery-list">
            <h1>Grocery List</h1>
            <div className="grocery-item">{items}</div>
        </div>
    )
}

const mapStateToProps = state => ({
    groceryList: state.menu.groceryList
})

export default connect(mapStateToProps)(GroceryList);
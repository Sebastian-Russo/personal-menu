import React from 'react'; 
import {connect} from 'react-redux';
import {deleteItemFromGroceryList} from '../actions';
import './grocery-list.css'

export function GroceryList(props, {groceryList}) {

    const deleteHanderler = (i) => {
        console.log('delete clicked', i)
        props.dispatch(deleteItemFromGroceryList(i))
    }

    const items = props.groceryList.map((item, i) => {
        console.log(item)
        return (
            <div className="box-grocery-list" key={`item-${i}`}>
                <div className="grocery-item">{item}</div>
                <button 
                    className="button-delete-grocery-item"
                    type="button"
                    onClick={() => deleteHanderler(i)}
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
    groceryList: state.grocery.groceryList
})

export default connect(mapStateToProps)(GroceryList);
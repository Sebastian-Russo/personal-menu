import React from 'react'; 
import {connect} from 'react-redux';
import {users} from '../actions';
import './grocery-list.css'

export const deleteHandler = (i, dispatch) => {
    console.log('delete clicked', i)
    dispatch(users.deleteItemFromGroceryList(i))
}

export function GroceryList(props) {

    let items;
        if (props.groceryList) {
            items = props.groceryList.map((item, i) => {
            console.log(item)
                return (
                    <div className="box-grocery-list" key={`item-${i}`}>
                        <div className="grocery-item">{item}</div>
                        <button 
                            className="button-delete-grocery-item"
                            type="button"
                            onClick={() => deleteHandler(i, props.dispatch)}
                            >Delete Item</button>
                    </div>
                )
            })
        }

    return (
        <div className="container-grocery-list">
            <h1>Grocery List</h1>
            <div className="grocery-item">{items}</div>
        </div>
    )
}

const mapStateToProps = state => ({
    groceryList: state.users.groceryList
})

export default connect(mapStateToProps)(GroceryList);
import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import RecipeForm from './recipe-form';
import {deleteMenuItem, addToGroceryList} from '../actions';
import './your-menu-item.css';
// *** AKA RECIPE COMPONENT ***

export class YourMenuItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            groceryList: [],
            menuItem: {},
            editing: false,
            redirect: false
        }
    }

    // when component mounts, check to see if menu item id from props matches the id from the route in match params. (whatever menu item was clicked on, those id's need to match)
    componentDidMount(){
        const menuItem = this.props.menuItems.filter(menuItem => menuItem.id == this.props.match.params.id)[0];
        this.setState({
            menuItem
        })
    }

    setEditing = () => {
        this.setState({
            editing: !this.state.editing // oposite of true or false 
        })
    }

    handleDeleteClick = () => {
        console.log(this.state.menuItem.id)
        this.props.dispatch(deleteMenuItem(this.props.authToken, this.state.menuItem.id))
        this.setState({ redirect: true })
    }


    // adds ingredient to grocery list (local state)
    handleAddToGroceryList = ingredient => {
        const groceryItem = `${ingredient.amount} of ${ingredient.ingredient}`
        console.log(groceryItem)
        this.setState({ groceryList: [...this.state.groceryList, groceryItem]})
        console.log(this.state)
    }
    // adds grocery list (to store)
    addToStoreGroceryList = (e) => {
        e.preventDefault();
        this.props.dispatch(addToGroceryList(this.state.groceryList));
    }

    render() {
        const { menuItem } = this.state;
        
        // if no menu item (aka has been deleted) redirect to menu 
        if (!menuItem){
            return <Redirect to="/your-menu" />
        }
        // if editing is true (aka user clicked edit) send to recipe form instead of showing menu item 
        if (this.state.editing === true) {
            return (
                <RecipeForm 
                    menuItem={menuItem}
                    setEditing={this.setEditing}
                />
            )
        } 

        // lists the menu item ingredients 
        const ingredients = menuItem.ingredients 
            ? menuItem.ingredients.map((ingredient,i) => {
                return (
                    <div   
                        className="box-addItem"  
                        key={`ingredient-${i}`}
                        // key={ingredient.id}
                        >
                        <div className="grocery-item">{ingredient.amount} of {ingredient.ingredient}</div>
                        <button 
                            className="button-addItem"
                            onClick={() => this.handleAddToGroceryList(ingredient)}
                        >Add Item</button>
                        <br></br>
                        <br></br>
                    </div>
                )
            })
            : "";

        // lists all the categories the menu item is selected in 
        const categories = menuItem.categories
            ? menuItem.categories.map((category, i) => {
                return (
                    <div key={`categories-${i}`}><Link to={`/your-menu-categories/${category}`}>{category}</Link></div>
                )
            })
            : "";

        if (this.state.redirect === true) {
            return <Redirect to={`/your-menu/`} />
        }

        return (
                <div className="menu-item">
                    <h1 className="title-categories">{menuItem.name}</h1>
                    <h3>Ingredients:</h3>
                    <div>{ingredients}</div>
                    <button 
                        className="button-send-grocery-list"
                        onClick={this.addToStoreGroceryList}
                        >Send items to Your Grocery List
                    </button>
                    <h3>Directions: </h3>
                    <div>{menuItem.directions}</div>
                    <Link to={'/your-menu'}><h3>Categories:</h3></Link>
                    <div>{categories}</div>
                    <br></br>
                    <button onClick={this.setEditing}>Edit Recipe</button>
                    <button onClick={this.handleDeleteClick}>Delete Recipe</button>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    menuItems: state.menu.menuItems,
    userId: state.auth.currentUser,
    authToken: state.auth.authToken 
});

export default connect(mapStateToProps)(YourMenuItem)



// why the [0] if it's the only one in the array?
// filtered menu item obj from array of objs, by filtering params id
// previously, i thought i'd have to map array of obj, then map array obj again, to get to ingredients obj
// const menuItem = menuItems.filter(menuItem => menuItem.id === props.match.params.id)[0];
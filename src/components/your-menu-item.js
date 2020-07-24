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
            groceryItem: "",
            checked: true,
            menuItem:{},
            editing: false
        }
    }

    componentDidMount(){
        const menuItem = this.props.menuItems.filter(menuItem => menuItem.id == this.props.match.params.id)[0];
        this.setState({
            menuItem
        })
    }

    // adds ingredient to grocery list 
    handleCheck = e => {
        console.log(e.target)
        this.setState({ checked: e.target.checked })

        const groceryItem = e.target.name;
        if (this.state.groceryList.includes(groceryItem)) {
            this.setState({
                groceryList: this.state.groceryList.filter(item => item !== groceryItem)
            })
        }
        this.setState({ groceryList: [...this.state.groceryList, groceryItem]})
        console.log(this.state)
    }

    setEditing = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    handleDeleteClick = () => {
        this.props.dispatch(deleteMenuItem(this.menuItem.id))
    }

    addToStoreGroceryList = () => {
        this.props.dispatch(addToGroceryList(this.state.groceryList));
    }

render() {
    console.log(this.state)
    const { menuItem } = this.state;
    
    if (!menuItem){
        return <Redirect to="/your-menu" />
    }

    if (this.state.editing === true) {
        return (
            <RecipeForm 
                menuItem={menuItem}
                setEditing={this.setEditing}
            />
        )
    } 
    // handles delete item button
    const ingredients = menuItem.ingredients 
        ? menuItem.ingredients.map(ingredient => {
            return (
                <div key={ingredient.id}>
                    <div>{ingredient.amount} of {ingredient.ingredient}</div>
                    <input
                            name={ingredient.ingredient}
                            id={ingredient.id}
                            type="checkbox"  
                            value={this.state.ingredient}
                            checked={this.state.checked} 
                            onChange={this.handleCheck}  
                        />
                </div>
            )
        })
        : "";

    const categories = menuItem.categories
        ? menuItem.categories.map((category, i) => {
            return (
                <div key={`categories-${i}`}><Link to={`/your-menu-categories/${category}`}>{category}</Link></div>
            )
        })
        : "";

    return (
            <div className="menu-item">
                <h1 className="title-categories">{menuItem.name}</h1>
                <h3>Ingredients:</h3>
                <div>{ingredients}</div>
                <button 
                    onClick={this.addToStoreGroceryList}
                >Send items to Your Grocery List</button>
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
    menuItems: state.menu.menuItems
});

export default connect(mapStateToProps)(YourMenuItem)



// why the [0] if it's the only one in the array?
// filtered menu item obj from array of objs, by filtering params id
// previously, i thought i'd have to map array of obj, then map array obj again, to get to ingredients obj
// const menuItem = menuItems.filter(menuItem => menuItem.id === props.match.params.id)[0];
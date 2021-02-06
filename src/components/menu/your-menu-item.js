import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import RecipeForm from "../recipe-form/recipe-form";
import { Alert, AlertContainer } from "react-bs-notifier";
import { menu, users } from "../../actions";
import "./your-menu-item.css";
// *** AKA RECIPE COMPONENT ***

export class YourMenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItem: {},
      editing: false,
      redirect: false,
      alert: false,
      groceryItem: ""
    };
  }

  // when component mounts, check to see if menu item id from props matches the id from the route in match params. (whatever menu item was clicked on, those id's need to match)
  componentDidMount() {
    const menuItem = this.props.menuItems.filter(
      menuItem => menuItem.id === this.props.match.params.id
    )[0];
    this.setState({ menuItem });
  }

  setEditing = () => {
    this.setState({ editing: !this.state.editing });
  };

  handleDeleteClick = () => {
    console.log(this.state.menuItem.id);
    this.props.dispatch(
      menu.deleteMenuItem(this.props.authToken, this.state.menuItem.id)
    );
    this.setState({ redirect: true });
  };

  // adds ingredient to grocery list (local state )
  handleAddToGroceryList = ingredient => {
    const groceryItem = `${ingredient.amount} : ${ingredient.ingredient}`;
    this.props.dispatch(users.addItemToGroceryList(groceryItem));
    this.setState({
      alert: true,
      groceryItem
    });
  };

  render() {
    console.log(this.props)
    const { menuItem } = this.state;

  // if no menu item (aka has been deleted) redirect to menu
    if (!menuItem) {
      // return <Router><Redirect to={`/your-menu/:${categories}`} /></Router>;
      return <Router><Redirect to={'/your-menu/'}/></Router>;
    }
    // if editing is true (aka user clicked edit) send to recipe form instead of showing menu item
    if (this.state.editing === true) {
      return <RecipeForm menuItem={menuItem} setEditing={this.setEditing} />;
    }

    // lists the menu item ingredients
    const ingredients = menuItem.ingredients
      ? menuItem.ingredients.map((ingredient, i) => {
          return (
            <div className="box-addItem" key={`ingredient-${i}`}>
              <div className="grocery-item">
                {ingredient.amount} of {ingredient.ingredient}
              </div>
              <button
                className="button-addItem"
                onClick={() => this.handleAddToGroceryList(ingredient)}
              >
                Add Item to Grocery List
              </button>
              <br></br>
              <br></br>
            </div>
          );
        })
      : "";

    // lists all the categories the menu item is selected in
    const categories = menuItem.categories
      ? menuItem.categories.map((category, i) => {
          return (
            <div key={`categories-${i}`}>
              <Link to={`/your-menu/${category}`}>{category}</Link>
            </div>
          );
        })
      : "";

    const alert = (
      <AlertContainer position="top-right">
        {this.state.alert ? (
          <Alert type="info" headline="Success!">
            {this.state.groceryItem} has been added to your grocery list.
          </Alert>
        ) : null}
      </AlertContainer>
    );

    if (this.state.redirect === true) {
      return <Redirect to={`/your-menu/`} />;
    }

    return (
      <div className="menu-item">
        {alert}
        <h1 className="title-categories">{menuItem.name}</h1>
        <h3>Ingredients:</h3>
        <div>{ingredients}</div>
        <h3>Directions: </h3>
        <div>{menuItem.directions}</div>
        <Router>
        <Link to={"/your-menu"}>
          <h3>Categories:</h3>
        </Link></Router>
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
  userId: state.auth.id,
  authToken: state.auth.authToken,
  groceryList: state.users.groceryList
});

export default connect(mapStateToProps)(YourMenuItem);

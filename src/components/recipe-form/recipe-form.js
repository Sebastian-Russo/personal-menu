import React from "react";
import { reduxForm, focus } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Categories from "./categories";
import Ingredients from "./ingredients";
import RecipeInput from "./recipe-input";
import NewCategory from "./new-category";
// import { required, nonEmpty } from "../../validators";
import { menu, users } from "../../actions";
import Alerts from '../helpers/alerts';
import "./recipe-form.css";

export class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.newCategory = React.createRef();
    this.state = {
      name: "",
      ingredients: [],
      directions: "",
      categories: [],
      toggleCheckbox: false,
      redirect: false,
      checked: false,
      alert: false,
      alertNum: ""
    };
  }
  // checks if props are coming from your-menu-item because of edit recipe button
  componentDidMount() {
    if (this.props.menuItem) {
      const { menuItem } = this.props;
      const { name, ingredients, directions, categories, id } = menuItem;
      this.setState({
        name,
        ingredients,
        directions,
        categories,
        id
      });
    }
  }

  addIngredientAndAmount = ingredient => {
    this.setState({
      ingredients: [...this.state.ingredients, ingredient]
    });
  };
  // alertEmpty = () => {
  //   // console.log('Alert! Please fill in empty ingredient and/or amount before adding to list')
  //   this.setState({ alertNum: 2 })
  // }

  deleteIngredientAndAmount = (e, id, index) => {
    console.log('index', index)
    this.setState({
      ingredients: this.state.ingredients.filter((ingredient, i) => {
          // check if there is an _id created by mongoDB, happens user is editing recipe and ingredients were already saved previously
          if (ingredient._id) {
            return ingredient._id !== id;
          // if no _id created, it's a new pending recipe, use index 
          } else {
            console.log('this.state.ingredients', this.state.ingredients)
            return i !== index;
        }
      })
    });
  };

  onChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleIngredientChange = (e, index, property) => {
    e.preventDefault();
    const { ingredients } = this.state;
    ingredients[index][property] = e.target.value;
    this.setState({
      ingredients
    });
  };

  // adds category checked checkboxes to local state
  checkOrUncheck = event => {
    const category = event.target.value;
    const { categories } = this.state;
    if (categories.includes(category)) {
      this.setState({
        categories: categories.filter(cat => cat !== category)
      });
    } else {
      this.setState({
        categories: [...this.state.categories, category]
      });
    }
  };


  // adds newly made category checkbox to global store, with the other categories
  addNewCategory = newCat => {
    if (!this.props.categoryList.includes(newCat)) {
      this.props.dispatch(users.addCategoriesToUser(newCat));
    }
  };

  // shows input box to create new category checkbox
  toggleCheckbox = () => {
    this.setState({
      toggleCheckbox: !this.state.toggleCheckbox
    });
  };

  onSubmit = values => {
    if (!this.props.userId) {
      return alert('Alert! Please login or register before adding to your menu & recipe book')
    }

    if (this.state.id) {  // checks if there's a recipe, then edit rather than add new 
      this.props.dispatch(
        menu.updateMenuItem(this.props.authToken, this.state.id, this.state)
      );
    } else {
      const recipe = this.state;
      recipe.userId = this.props.userId; // add user id to new recipe 
      this.props.dispatch(menu.addRecipe(this.props.authToken, recipe));
    }
  };

  render() {

    const { 
      name, 
      directions, 
      categories, 
      ingredients, 
      toggleCheckbox 
    } = this.state;
    const { 
      submitSucceeded, 
      handleSubmit, 
      // valid 
    } = this.props;
    // console.log(this.props)

    if (submitSucceeded) {  // submitSucceeded is a prop of redux form, boolean: true, and succeed to submit 
      alert("Alert! You have successfully added a new recipe")
      return <Redirect to='/your-menu' />
    }

    let newCategory;
    if (toggleCheckbox) {
      newCategory = <NewCategory addNewCategory={this.addNewCategory} />;
    }


    return (
      <div className="form">
        <Alerts alertNum={this.alertNum} />

        <form onSubmit={handleSubmit(recipe => this.onSubmit(recipe))}>
          <h1>Add a new favorite recipe!</h1>

            <label htmlFor="name">Recipe Name *</label>
            <input
              name="name"
              id="name"
              type="text"
              label="Recipe Name"
              value={name}
              onChange={this.onChange}
              required
            />

            <h2>"Create" & "Select" one or more categories *: </h2>
            <Categories
              categories={categories}
              checkOrUncheck={this.checkOrUncheck}
            />
            <input
              name="other"
              id="other"
              type="checkbox"
              value={this.props.categories}
              onChange={() => this.toggleCheckbox()}
            />
            <label htmlFor="other">New Category</label>
            {newCategory}

            <h2>Add each ingredient and amount needed *:</h2>
            <RecipeInput 
              addIngredientAndAmount={this.addIngredientAndAmount} 
              // alertEmpty={this.alertEmpty}
            />

            <label htmlFor="directions">Directions *</label>
            <textarea
              name="directions"
              id="directions"
              type="text"
              rows="4"
              cols="25"
              label="Directions"
              value={directions}
              required
              onChange={this.onChange}
            />

            <Ingredients
              ingredients={ingredients}
              handleIngredientChange={this.handleIngredientChange}
              deleteIngredientAndAmount={this.deleteIngredientAndAmount}
            />
            <button type="submit"
            >Create Recipe</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuItems: state.menu.menuItems,
  categoryList: state.users.categoryList,
  userId: state.auth.id,
  authToken: state.auth.authToken
});

RecipeForm = connect(mapStateToProps)(RecipeForm);

export default reduxForm({
  form: "recipe",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("recipe", Object.keys(errors)[0]))
})(RecipeForm);

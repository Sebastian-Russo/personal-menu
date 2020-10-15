import React from "react";
import { reduxForm, focus } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Alert, AlertContainer } from "react-bs-notifier";
import Categories from "./categories";
import Ingredients from "./ingredients";
import RecipeInput from "./recipe-input";
import NewCategory from "./new-category";
import { required, nonEmpty } from "../../validators";
import { menu, users } from "../../actions";
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
      otherCheckbox: false,
      redirect: false,
      checked: false,
      alert: false
    };
  }
  // checks if props are coming from your-menu-item because of edit recipe button
  componentDidMount() {
    if (this.props.menuItem) {
      console.log("edit menu item", this.props);
      const { menuItem } = this.props;
      const { name, ingredients, directions, categories, id } = menuItem;
      this.setState({
        name: name,
        ingredients: ingredients,
        directions: directions,
        categories: categories,
        id: id
      });
    }
  }

  addIngredientAndAmount = ingredient => {
    this.setState({
      ingredients: [...this.state.ingredients, ingredient]
    });
    console.log(this.state);
  };

  deleteIngredientAndAmount = (e, id) => {
    this.setState({
      ingredients: this.state.ingredients.filter(ingredient => {
        return ingredient._id !== id;
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
    console.log("new new", ingredients);
    this.setState({
      ingredients
    });
  };

  // adds category checked checkboxes to local state
  checkOrUncheck = event => {
    const category = event.target.value;
    const { categories } = this.state;
    if (categories.includes(category)) {
      console.log("category included");
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
  otherCheckbox = () => {
    this.setState({
      otherCheckbox: !this.state.otherCheckbox
    });
  };

  // reduxForm already has a handleSubmit method, need to change it to onSubmit
  onSubmit = recipe => {
    console.log('recipe', recipe, 'userId', this.props.userId);
    if (!this.props.userId) {
      return alert('Please login or register before adding to your menu & recipe book')
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
    const { name, directions, categories, ingredients } = this.state;
    console.log(this.props, categories);

    if(this.props.submitSucceeded) {  // submitSucceeded is a prop of redux form, boolean: true, and succeed to submit 
      return <Redirect to='/your-menu' />
    }

    let newCategory;
    if (this.state.otherCheckbox) {
      newCategory = <NewCategory addNewCategory={this.addNewCategory} />;
    }

    // const alert = (
    //   <AlertContainer position="top-right">
    //     {this.state.alert ? (
    //       <Alert type="info" headline="Success!">
    //         {this.state.ingredients} Please add an ingredient and amount.
    //       </Alert>
    //     ) : null}
    //   </AlertContainer>
    // );

    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit(recipe => this.onSubmit(recipe))}>
          <h2>Add a new favorite recipe!</h2>

          <label htmlFor="name"> Recipe Name </label>
          <input
            name="name"
            id="name"
            type="text"
            label="Recipe Name"
            value={name}
            validate={[required, nonEmpty]}
            required
            onChange={this.onChange}
          />

          <RecipeInput addIngredientAndAmount={this.addIngredientAndAmount} />

          <label htmlFor="directions"> Directions </label>
          <textarea
            name="directions"
            id="directions"
            type="text"
            rows="4"
            cols="25"
            label="Directions"
            value={directions}
            validate={[required, nonEmpty]}
            required
            onChange={this.onChange}
          />
          <br></br>
          <br></br>

          <h3>Categories</h3>
          <Categories
            categories={categories}
            checkOrUncheck={this.checkOrUncheck}
          />
          <input
            name="other"
            id="other"
            type="checkbox"
            value={this.props.categories}
            onChange={() => this.otherCheckbox()}
          />
          <label htmlFor="other">New Category</label>
          {newCategory}
          <br></br>
          <br></br>
          <Ingredients
            ingredients={ingredients}
            handleIngredientChange={this.handleIngredientChange}
            deleteIngredientAndAmount={this.deleteIngredientAndAmount}
          />
          <button type="submit">Submit</button>
        </form>

        <br></br>
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

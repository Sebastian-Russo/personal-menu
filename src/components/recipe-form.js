import React from 'react';
import {reduxForm, 
    // SubmissionError, 
    focus,} from 'redux-form';
import {Redirect} from 'react-router-dom';
import YourMenu from './your-menu';
import RecipeInput from './recipe-input';
import RecipeField from './recipe-field';
import RecipeCategories from './recipe-categories';
import {required, nonEmpty} from '../validators';
import { addRecipe, updateMenuItem, addCategory, editRecipe } from '../actions';

export class RecipeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            name: "",
            ingredients: [],
            directions: "",
            categories: [],
            id: Math.floor(Math.random() * 10000000000),
            otherCheckbox: true,
            newCategory: ""
        }
    }
    // checks if props are coming from edit button 
    componentDidMount() {
        if (this.props.menuItem) {
            console.log('edit menu item', this.props)
            const {menuItem} = this.props;
            const {name, ingredients, directions, categories, id,} = menuItem;
            this.setState({ 
                name: name,
                ingredients: ingredients,
                directions: directions,
                categories: categories,
                id: id,
                otherCheckbox: true,
                newCategory: []
            })
        }
    }


    addIngredientAndAmount = (ingredient) => {
        ingredient.id = Math.floor(Math.random() * 10000000000);
        console.log(ingredient)
        this.setState({
            ingredients: [...this.state.ingredients, ingredient]
        });
        console.log(this.state)
    };

    deleteIngredientAndAmount = (id) => {
        this.setState({
            ingredients: this.state.ingredients.filter(ingredient => {
                return ingredient.id !== id
            })
        })
    }

    addCategory = (event) => {
        const category = event.target.value;
        // if state.categories array includes new category, why setState? should it be if it doesn't include?
        if (this.state.categories.includes(category)) {
            this.setState({
                categories: this.state.categories.filter(cat => cat !== category)
            })
        }
        this.setState({ categories: [...this.state.categories, category] })
    }

    handleChange = e => { 
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleNewCategory = (e) => {
        const change = e.target.value;
        this.setState({ newCategory: change })
    }
    handleAddCategoryToState = () => {
        this.props.dispatch(addCategory(this.state.newCategory))
    }

    otherCheckbox = () => {
        this.setState({
            otherCheckbox: !this.state.otherCheckbox
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.editing === true) {
            this.props.dispatch(editRecipe())
            this.props.dispatch(updateMenuItem(this.state))
        } else {
            this.props.dispatch(addRecipe(this.state))
            return <Redirect to="/your-menu" />
            // return <YourMenu />
        }
    }
 
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <h2>Add a new favorite recipe!</h2>
                
                    <label htmlFor="name"> Recipe Name </label>
                    <input
                        name="name"
                        id="name"
                        type="text"
                        label="Recipe Name"
                        value={this.state.name}
                        validate={[required, nonEmpty]} 
                        onChange={this.handleChange}
                    />
                    
                    <RecipeInput 
                        addIngredientAndAmount={this.addIngredientAndAmount}
                    />

                    <label htmlFor="directions"> Directions </label>
                    <textarea 
                        name="directions"
                        id="directions"
                        type="text"
                        rows="4" 
                        cols="25"
                        label="Directions"
                        value={this.state.directions}
                        validate={[required, nonEmpty]}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>

                    <RecipeCategories 
                        addCategory={this.addCategory}
                        categories={this.state.categories}
                    />
                    <input
                        name="categories"
                        id="other"
                        type="checkbox"  
                        value="other"
                        value={this.props.categories}
                        onChange={(e) => this.addCategory(e)}   
                        onChange={this.otherCheckbox}
                    />
                    <label htmlFor="create">Create a new category</label>
                    <input 
                        type="text"
                        id="otherValue"
                        name="other"
                        hidden={!this.state.otherCheckbox ? false : true}
                        onChange={this.handleNewCategory}
                    />
                    <button
                        hidden={!this.state.otherCheckbox ? false : true}
                        onClick={this.handleAddCategoryToState}>
                        Add Category
                    </button>

                    <br></br>
                    <br></br>
                    <button
                        type="submit"
                        // disabled={this.props.pristine || this.props.submitting}
                        onSubmit={this.onSubmit}
                        >
                        Submit 
                    </button>
                </form>

                <br></br>
                <RecipeField 
                    menuItem={this.state}
                    deleteIngredientAndAmount={this.deleteIngredientAndAmount}
                    />
            </div>
        );
    }
}

export default reduxForm({
    form: 'recipe',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('recipe', Object.keys(errors)[0]))
})(RecipeForm);


import React from 'react';
import {reduxForm, 
    // SubmissionError, 
    focus,} from 'redux-form';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import RecipeInput from './recipe-input';
// import RecipeField from './recipe-field';
// import RecipeCategories from './recipe-categories';
import {required, nonEmpty} from '../validators';
import { addRecipe, updateMenuItem, addCategory, } from '../actions';
import './recipe-form.css'

export class RecipeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            name: "",
            ingredients: [],
            directions: "",
            categories: [],
            otherCheckbox: true,
            newCategory: "",
            redirect: false,
            checked: false
        }
    }
    // checks if props are coming from your-menu-item because of edit recipe button
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
                newCategory: [],
                checked: false
            })
        }
    }

    // 1st arg. prevProps, 2nd arg. prevState
    componentWillUpdate(prevProps, newProp) {
        if (prevProps.menuItems.length > this.props.menuItems.length){
            console.log('here')
            this.setState({redirect: true})
            // return <Redirect to={`/your-menu-item/${this.state.id}`} />
        }
    }

    addIngredientAndAmount = (ingredient) => {
        this.setState({
            ingredients: [...this.state.ingredients, ingredient]
        });
        console.log(this.state)
    };

    deleteIngredientAndAmount = (e, id) => {
        this.setState({
            ingredients: this.state.ingredients.filter(ingredient => {
                return ingredient._id !== id
            })
        })
    }

    addCategory = (event) => {
        const category = event.target.value;
        // const checked = this.state.categories.includes(category);
        // console.log(checked)
        this.setState({
             categories: [...this.state.categories, category]
        })
        
        // if (!this.state.categories.includes(category)) {
        //     this.setState({
        //         categories: this.state.categories.filter(cat => cat !== category)
        //     })
        // }
    }

    handleChange = e => { 
        console.log(e)
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleNewCategory = (e) => {
        const change = e.target.value;
        this.setState({ newCategory: change })
    }
    handleAddCategoryToState = (e) => {
        e.preventDefault();
        this.props.dispatch(addCategory(this.state.newCategory))
    }

    otherCheckbox = () => {
        this.setState({
            otherCheckbox: !this.state.otherCheckbox
        })
    };

    handleIngredientChange = (e, index, property) => {
        e.preventDefault();
        const { ingredients } = this.state;
        ingredients[index][property] = e.target.value;
        console.log('new new', ingredients);
        this.setState({
            ingredients
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.id) { // check if there's an id in state, don't rely on store prop (editing === true)
            this.props.dispatch(updateMenuItem(this.props.authToken, this.state.id, this.state))
            this.setState({ redirect: true })
        } else {
            const recipe = this.state;
            recipe.userId = this.props.userId;
            this.props.dispatch(addRecipe(this.props.authToken, recipe))
            this.setState({ redirect: true })
        }
    }

    render() {
        const {
            // id,
            name,
            redirect,
            directions,
            categories,
            ingredients,
            otherCheckbox
        } = this.state;
        // console.log(categories)
        console.log(this.state)

        if (redirect === true) {
            return <Redirect to={`/your-menu/${categories[0]}`} />
        }

        let showIngredients;
        if(ingredients.length) {
            showIngredients = ingredients.map((item, i) => {
                // console.log(item._id)
                return (
                <div className="form-input" key={`ingredient-${i}`}>
                    <label htmlFor="ingredient"> Ingredient </label>
                    <input 
                        name={item.ingredient}
                        id={item.id}
                        type="text"
                        value={item.ingredient}
                        onChange={e => this.handleIngredientChange(e, i, 'ingredient')} 
                    />
                    <label htmlFor="amount"> Amount </label>
                    <input 
                        name={item.amount}
                        id={item.id}
                        type="text"
                        // controlled component when using value in input 
                        value={item.amount}
                        onChange={e => this.handleIngredientChange(e, i, 'amount')} 
                        />
                    <button type="button" onClick={(e) => this.deleteIngredientAndAmount(e, item._id)}>Delete</button>
                </div>
                )
            })
        }


        let cat = this.props.categoryList.map((category, i) => {
            const checked = categories.includes(category);
            const label = category[0].toUpperCase() + category.slice(1);
            return (
                <div key={`${category}-${i}`} className="ingredient-list">
                    <input 
                        name={category}
                        id={category}
                        type="checkbox"
                        value={category}
                        checked={checked}
                        // checked={this.state.checked}
                        onChange={(e) => this.addCategory(e)}                    />
                    <label htmlFor={category}>{label.replace(/-/g, ' ')}</label>
                    <br></br>
                </div>
            )
        })

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
                        value={name}
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
                        value={directions}
                        validate={[required, nonEmpty]}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>

                    <h3>Categories</h3>
                    {cat}

                    <input
                        name="categories"
                        id="other"
                        type="checkbox"  
                        value={this.props.categories}
                        onChange={(e) => this.addCategory(e)}   
                        onChange={this.otherCheckbox}
                    />
                    <label htmlFor="create">Create a new category</label>
                    <input 
                        type="text"
                        id="otherValue"
                        name="other"
                        hidden={!otherCheckbox ? false : true}
                        onChange={this.handleNewCategory}
                    />
                    <button
                        hidden={!otherCheckbox ? false : true}
                        onClick={this.handleAddCategoryToState}>
                        Add Category
                    </button>

                    <br></br>
                    <br></br>
                    <h3>Ingredients</h3>
                    {showIngredients}
                    <button
                        type="submit"
                        >
                        Submit 
                    </button>
                </form>

                <br></br>
                {/* <RecipeField 
                    menuItem={this.state}
                    deleteIngredientAndAmount={this.deleteIngredientAndAmount}
                    /> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    menuItems: state.menu.menuItems,
    categoryList: state.category.categoryList,
    userId: state.auth.currentUser,
    authToken: state.auth.authToken 
})

RecipeForm = connect(mapStateToProps)(RecipeForm)

export default reduxForm({
    form: 'recipe',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('recipe', Object.keys(errors)[0]))
})(RecipeForm);
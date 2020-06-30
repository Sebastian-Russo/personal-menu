import React from 'react'; 

export default class RecipeCategories extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            categories: [],
            otherCheckbox: true
        }
    }

    handeChangeCheckCategories = e => {
        let checked = e.target.value;
        this.setState({
            categories: [...this.state.categories, checked]
        })
        console.log(checked, this.state.categories)
      
        this.addCategoriesToParent()
    }

    addCategoriesToParent = () => {
        this.props.addCategories(this.state.categories)
    }


    otherCheckbox = () => {
            this.setState({
                otherCheckbox: !this.state.otherCheckbox
            })
    };

    render() {
        return (
            <div>
                    <input
                        name="categories"
                        id="breakfast"
                        type="checkbox"  
                        value="breakfast"
                        onChange={this.handeChangeCheckCategories} 
                    />
                    <label htmlFor="breakfast">Breakfast</label>
                    <br></br>
                    <input
                        name="categories"
                        id="lunch"
                        type="checkbox" 
                        value="lunch"
                        onChange={this.handeChangeCheckCategories} 
                    />
                    <label htmlFor="lunch">Lunch</label>
                    <br></br>
                    <input
                        name="categories"
                        id="dinner"
                        type="checkbox"  
                        value="dinner"
                        onChange={this.handeChangeCheckCategories}
                    />
                    <label htmlFor="dinner">Dinner</label>
                    <br></br>
                    <input
                        name="categories"
                        id="snacks"
                        type="checkbox"  
                        value="snacks"
                        onChange={this.handeChangeCheckCategories}
                    />
                    <label htmlFor="Snacks">Snacks</label>
                    <br></br>
                    <input
                        name="categories"
                        id="quick-and-easy"
                        type="checkbox"  
                        value="quick-and-easy"
                        onChange={this.handeChangeCheckCategories}
                    />
                    <label htmlFor="quick-and-easy">Quick and Easy</label>
                    <br></br>
                    <input
                        name="categories"
                        id="dessert"
                        type="checkbox"  
                        value="dessert"
                        onChange={this.handeChangeCheckCategories}
                    />
                    <label htmlFor="dessert">Dessert</label>
                    <br></br>

                    <input
                        name="categories"
                        id="other"
                        type="checkbox"  
                        value="other"
                        onChange={this.handeChangeCheckCategories}
                        onChange={this.otherCheckbox}
                    />
                    <label htmlFor="create">Create a new category</label>
                    <input 
                        type="text"
                        id="otherValue"
                        name="other"
                        hidden={!this.state.otherCheckbox ? false : true}
                        onChange={this.handeChangeCheckCategories}
                        />

            </div>
        )
    }
}

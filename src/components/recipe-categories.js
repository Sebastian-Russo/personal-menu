import React from 'react'; 

export default class RecipeCategories extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            categories: [],
            otherCheckbox: true
        }
    }

    checkCategories = e => {

        let checked = e.target.value;
        this.setState({
            categories: [...this.state.categories, checked]
        })
        console.log(checked, this.state.categories)
        // does not show last category checked/clicked 
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
                        onChange={this.checkCategories} 
                    />
                    <label htmlFor="breakfast">Breakfast</label>
                    <br></br>
                    <input
                        name="categories"
                        id="lunch"
                        type="checkbox" 
                        value="lunch"
                        onChange={this.checkCategories} 
                    />
                    <label htmlFor="lunch">Lunch</label>
                    <br></br>
                    <input
                        name="categories"
                        id="dinner"
                        type="checkbox"  
                        value="dinner"
                        onChange={this.checkCategories}
                    />
                    <label htmlFor="dinner">Dinner</label>
                    <br></br>
                    <input
                        name="categories"
                        id="snacks"
                        type="checkbox"  
                        value="snacks"
                        onChange={this.checkCategories}
                    />
                    <label htmlFor="Snacks">Snacks</label>
                    <br></br>
                    <input
                        name="categories"
                        id="quick-and-easy"
                        type="checkbox"  
                        value="quick-and-easy"
                        onChange={this.checkCategories}
                    />
                    <label htmlFor="quick-and-easy">Quick and Easy</label>
                    <br></br>
                    <input
                        name="categories"
                        id="dessert"
                        type="checkbox"  
                        value="dessert"
                        onChange={this.checkCategories}
                    />
                    <label htmlFor="dessert">Dessert</label>
                    <br></br>

                    <input
                        name="categories"
                        id="other"
                        type="checkbox"  
                        value="other"
                        onChange={this.checkCategories}
                        onChange={this.otherCheckbox}
                    />
                    <label htmlFor="create">Create a new category</label>
                    <input 
                        type="text"
                        id="otherValue"
                        name="other"
                        hidden={!this.state.otherCheckbox ? false : true}
                        />

            </div>
        )
    }
}





// var otherCheckbox = document.querySelector('input[value="other"]');
// var otherText = document.querySelector('input[id="otherValue"]');
// otherText.style.visibility = 'hidden';

// otherCheckbox.addEventListener('change', () => {
//   if(otherCheckbox.checked) {
//     otherText.style.visibility = 'visible';
//     otherText.value = '';
//   } else {
//     otherText.style.visibility = 'hidden';
//   }
// });
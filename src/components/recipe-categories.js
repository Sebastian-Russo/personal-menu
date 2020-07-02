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

        this.props.addCategories(this.state.categories)
    }

    otherCheckbox = () => {
            this.setState({
                otherCheckbox: !this.state.otherCheckbox
            })
    };

    render() {
        const categories = [
            "breakfast",
            "lunch",
            "dinner",
            "snacks",
            "quick-and-easy",
            "dessert"
        ].map((cat, i) => {
            const label = cat[0].toUpperCase() + cat.slice(1);
            return (
                <div key={`${cat}-${i}`}>
                    <input 
                        name={cat}
                        id={cat}
                        type="checkbox"
                        value={cat}
                        onChange={this.handeChangeCheckCategories}
                    />
                    <label htmlFor={cat}>{label.replace(/-/g, ' ')}</label>
                    <br></br>
                </div>
            )
        })

        return (
            <div>

                    <div>{categories}</div>

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
                    />

            </div>
        )
    }
}

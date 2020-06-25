import React from 'react'; 

export default class RecipeInput extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            menuItems:[
                {
                    id: 0,
                    name: "",
                    ingredients: [
                        {
                            ingredient: "",
                            amount: ""
                        }
                    ],
                    steps: [
                        {
                            step: 1,
                            direction: ""    
                        }
                    ]
                }
            ]
        }
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    handleClick = (e) => {
        const {name} = e.target;
        const {value} = e.target;

        console.log(name, value)
        
        if (name === "name") {
            this.setState({
                menuItems: {name: value}
            })
        } else if (name === "ingredients") {
            this.setState({
                menuItems: {
                    ingredients: [
                        {ingredient: value}
                    ]
                }
            })
        } else if (name === "amount") {
            this.setState({
                menuItems: {
                    ingredients: [
                        {amount: value}
                    ]
                }
            })
        } else if (name === "step") {
            this.setState({menuItems: {
                steps: [
                    {step: value}
                ]
            }})
        } else if (name === "direction") {
            this.setState({menuItems: {
                steps: [
                    {direction: value}
                ]
            }})
        }

        // this.handleClick(e.target.value)
        console.log(this.state)

    }
    
    render() {
        const Element = this.props.element || 'input'

        let error;
        if (this.props.meta.touched && this.props.metaerror) {
            error = <div className="form-error">
                {this.props.meta.error}
            </div>;
        }

        let warning; 
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">
                    {this.props.meta.warning}
                </div>
            );
        }

        return (
            <div className="form-input">
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>

                <Element
                    {...this.props.input}
                    id={this.props.type}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                    value='test'
                    >
                      {this.props.children}
                </Element>

                <button
                    {...this.props.input}
                    type="button"
                    onClick={this.handleClick} 
                    >
                    Add {this.props.label}
                </button>

            </div>
        );
    }
}
 














 {/* <input 
                    type="checkbox"
                    name="category"
                    value="breakfast">
                    Breakfast
                </input>
                <input 
                    type="checkbox"
                    name="category"
                    value="lunch">
                    Lunch
                </input>
                <input 
                    type="checkbox"
                    name="category"
                    value="snacks">
                    Snacks
                </input>
                <input 
                    type="checkbox"
                    name="category"
                    value="dinner">
                    Dinner
                </input>
                <input 
                    type="checkbox"
                    name="category"
                    value="deserts">
                    Deserts
                </input>
                <input 
                    type="checkbox"
                    name="category"
                    value="quick">
                    Quick
                </input>
                <input 
                    type="checkbox"
                    name="category"
                    value="Cheap">
                    Cheap
                </input> */}
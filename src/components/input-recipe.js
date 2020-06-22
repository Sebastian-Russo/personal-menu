import React from 'react'; 

export default class InputRecipe extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
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
                    >
                        {this.props.children}
                </Element>
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
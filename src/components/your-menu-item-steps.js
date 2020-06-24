import React from 'react';
import {connect} from 'react-redux';

export function YourMenuItemSteps(props){
    const {menuItems} = props;

    const stepsAndDirections = menuItems.map(menuItem => {
        return menuItem.steps.map((step, i) => (
            <div>
                {step.step} : {step.direction}
            </div>
        ))
    })

    return (
        <div className="menu-menuItem-steps">{stepsAndDirections}</div>
    );
}



const mapStateToProps = state => ({
    menuItems: state.menu.menuItems
});

export default connect(mapStateToProps)(YourMenuItemSteps);

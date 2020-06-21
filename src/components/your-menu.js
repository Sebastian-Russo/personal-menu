import React from 'react';
import {connect} from 'react-redux';
// import {} from '../actions';

export function YourMenu(props) {
    console.log(props)
    const menu = props.state;

}

const mapStateToProps = (state, props) => {

}

export default connect(mapStateToProps)(YourMenu)
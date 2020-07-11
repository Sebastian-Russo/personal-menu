import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import YourMenuCategories from './your-menu-categories'; 
import './your-menu.css'

export class YourMenu extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div>
                <div className="landing-page">
                    <div className="landing-page-username">
                        Username: {this.props.username}
                    </div>
                    <div className="landing-page-name">Name: {this.props.name}</div>
                    <div className="landing-page-protected-data">
                        Protected data: {this.props.protectedData}
                    </div>
                </div>
                <div className="menu-items container">
                    <h1>Your Menu</h1>
                    <YourMenuCategories />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(YourMenu));
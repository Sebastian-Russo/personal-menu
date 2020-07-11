import React from 'react';
import YourMenuCategories from './your-menu-categories'; 
import './your-menu.css'

export default function YourMenu(props) {
    componentDidMount() {
        props.dispatch(fetchProtectedData());
    }

    return (
        <div>
            <div className="landing-page">
                <div className="landing-page-username">
                    Username: {props.username}
                </div>
                <div className="landing-page-name">Name: {this.props.name}</div>
                <div className="landing-page-protected-data">
                    Protected data: {props.protectedData}
                </div>
            </div>
            <div className="menu-items container">
                <h1>Your Menu</h1>
                <YourMenuCategories />
            </div>
        </div>
    );
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
// import React from 'react';
// import {connect} from 'react-redux';
// import requiresLogin from './requires-login';
// import {fetchProtectedData} from '../actions/protected-data';

// export class Dashboard extends React.Component {
//     componentDidMount() {
//         this.props.dispatch(fetchProtectedData());
//     }

//     render() {
//         return (
//             <div className="dashboard">
//                 <div className="dashboard-username">
//                     Username: {this.props.username}
//                 </div>
//                 <div className="dashboard-name">Name: {this.props.name}</div>
//                 <div className="dashboard-protected-data">
//                     Protected data: {this.props.protectedData}
//                 </div>
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => {
//     const {currentUser} = state.auth;
//     return {
//         username: state.auth.currentUser.username,
//         name: `${currentUser.firstName} ${currentUser.lastName}`,
//         protectedData: state.protectedData.data
//     };
// };

// // we export the Dashboard component to see requiresLogin in use:
// export default requiresLogin()(connect(mapStateToProps)(Dashboard));
// // Dashboard is first wrapped by connect and then wrapped by requiresLogin. If we weren't also connecting the component, you would see a very familiar pattern:
// // export default requiresLogin()(Dashboard);
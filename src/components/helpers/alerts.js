import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from "react-redux";

import 'react-toastify/dist/ReactToastify.css';

class Alerts extends Component {
  constructor(props){
    super(props)
    // this.state = { 
    //   alertLogin: ''
    // }
  }

  componentDidMount() {
    // alert user to login before adding recipe
    if (!this.props.authToken) {
      console.log('there is a user', this.props.authToken)
      this.notify()
    }
  }
  notify = () => toast("Please login before adding a recipe!");


  render() {
    console.log(this.props)

    return ( 
    <div>
      <ToastContainer />
    </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken
})
 
export default connect(mapStateToProps)(Alerts);



// alert to register/login before they can submit a recipe 

// alert to enter at least one ingredient and amount 

// alter to click on at least one category checkbox 

// alter for successful submit of new recipe, not just redirect to categories 

// prevent submitting without above (ingredient and category filled out)

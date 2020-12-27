import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from "react-redux";

import 'react-toastify/dist/ReactToastify.css';

class Alerts extends Component {

  componentDidMount() {
    // alert user to login before adding recipe
    if (!this.props.authToken) {
      this.notify()
    }
    
  }

  notify = (num) => { 
      return toast("Please login before adding a recipe!");
  }

  render() {
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


// alert to click on at least one category checkbox (or make required before submit)
// prevent submitting without above (ingredient and category filled out)

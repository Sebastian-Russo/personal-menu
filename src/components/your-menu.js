import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { menu } from '../actions';
import './your-menu.css'

export class YourMenu extends React.Component {
  componentDidMount() {
    if (this.props.userId) { 
        this.props.dispatch(menu.getRecipes(this.props.authToken, this.props.userId))
    }
  }
  
  render(){
    const { categoryList, username } = this.props;
    const user = !username ? "Your" : username + "'s";
    let categories;
    if (categoryList && categoryList.length) {
      categories = categoryList.map((category, i) => {
        return (
            <div key={`categories-${i}`}>
                <h3>
                    <Link to={`/your-menu/${category}`} className="category-text">
                        {category}
                    </Link>
                </h3>
            </div>
        )
      })
    }
    
    return (
        <div className="menu-items container">
            <h1 className="your-menu">{user} Menu</h1>
            <div>{categories}</div>
        </div>
    );
  } 
}

const mapStateToProps = state => ({
    categoryList: state.users.categoryList,
    username: state.auth.username,
    authToken: state.auth.authToken,
    userId: state.auth.id
})

export default connect(mapStateToProps)(YourMenu)
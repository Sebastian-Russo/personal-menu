import React from 'react'; 
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Quotes from './quotes.js'
import './home.css'

export class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quotes: props.quotes
        }
    }

    render(){

        return (
            <div>
                <h1 className="title-home"> Welcome to Your Personal Menu Recipe Book </h1>
                <div className="container-home">
                    <div className="box-1">
                        <p className="title-category">Your Personal Menu</p>
                        <p>Know how to cook, but can't think of what to make? Or just starting out and you want to remember the meals you like. Add all your favorite recipes and be able to browse by category. Like a menu database for all the meals you have in your arsenal. When your kids ask what's for dinner, tell them to look at what's on the menu. Categorize it in stardard meals such as breakfast, lunch, or dinner. Or create your own unique categories, speciallizing in different cuisines, quick-and-easy meals, budget meals, 3 ingredient meals, grilled meals, seasonal meals, etc. Create categories and tag meals in multiple categories to organize them how ever you'd like. And be sure you'll see them when you're browsing your menu depending on your mood and apetite.</p>
                    </div>
                    <div className="box-2">
                        <p className="title-category">Recipe Book</p>
                        <p>If you're beginning or seasoned to cooking, slowly start adding to your arsenal all your recipes you come by. Have classic favorite you know by heart, share them in your book for others, or for yourself when you view your menu. New recipes you tear out of a magaize, see on pintrest, instagram, youtube, google, etc, can now all be combine in one place. And the best part is, you can edit and rearange. While you cook, maybe you'd like to remind yourself to add 1 tbsp more of butter and garlic, each recipe can be edited and customized to you, not just specifically what the recipe online says with some notes scribbled on the side.</p>
                    </div>
                    <div className="box-3">
                        <p className="title-category">Grocery List</p>
                        <p>Export your grocery list of items you need. When I go to the grocery store, I need a list, and that list comes from what meals I'm going to make for the week. View your meals, then click the items in the list of ingredients that you need to pick up as you browse your kitchen cubboard and fridge.</p>
                    </div>
                </div>

                <div className="container-links">
                    <div className="box-4">
                        <p><Link to="/registration-form" className="link">Register </Link> or <Link to="/login-form" className="link"> Login</Link></p>
                    </div>
                </div>

                <div className="container-quotes">
                    <div 
                        className="box-5">
                        <Quotes />
                    </div>
                </div>
            </div>    
        )
    }
}

const mapStateToProps = state => ({
    quotes: state.menu.quotes
})

export default connect(mapStateToProps)(Home);
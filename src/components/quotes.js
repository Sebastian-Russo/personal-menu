import React from 'react';

class Quotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            randomQuote: "",
            quotes: [
                {
                   quote: "Tis an ill cook that cannot lick his own fingers.",
                   author: "William Shakespear"
               },
                {
                   quote: "Cooking is at once child's play and adult joy.",
                   author: "Craig Claiborne"
               },
                {
                   quote: "I cook with wine; sometimes I even add it to the food.",
                   author: "W.C. Fields"
               },
                {
                   quote: "Cooking is about creating something delicious for someone else.",
                   author: "Ayumi Komura"
               },
                {
                   quote: "No one who cooks, cooks alone. Even at her most solitary, a cook in the kitchen is surrounded by generations of cooks past, the advice and menus of cooks present, the wisdom of cookbook writers.",
                   author: "Laurie Colwin"
               },
                {
                   quote: "Always start out with a larger pot than what you think you need.",
                   author: "Julia Child"
               },
                {
                   quote: "Until I discovered cooking, I was never really interested in anything.",
                   author: "Julia Child"
               },
                {
                   quote: "…no one is born a great cook, one learns by doing",
                   author: "Julia Child"
               },
                {
                   quote: "Cooking requires confident guesswork and improvisation — experimentation and substitution, dealing with failure and uncertainty in a creative way.",
                   author: "Paul Theroux"
               },
                {
                   quote: "A recipe has no soul. You as the cook must bring soul to the recipe.",
                   author: "Thomas Keller"
               },
                {
                   quote: "You don’t have to cook fancy or complicated masterpieces, just good food from fresh ingredients.",
                   author: "Julia Child"
               },    
                {
                   quote: "Cooking and shopping for food brings rhythm and meaning to our lives.",
                   author: "Alice Waters"
               },
               {
                    quote: "Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors — it’s how you combine them that sets you apart.",
                    author: "Wolfgang"
               },
               {
                    quote: "Cooking is not difficult. Everyone has taste, even if they don’t realize it. Even if you’re not a great chef, there’s nothing to stop you understanding the difference between what tastes good and what doesn’t.",
                    author: "Gerard Depardieu"
               },
               {
                    quote: "A good cook is like a sorceress who dispenses happiness.",
                    author: "Elsa Schiaparelli"
               },
               {
                    quote: "Nobody thinks it’s silly to invest two hours’ work in two minutes’ enjoyment; but if cooking is evanescent, well, so is the ballet",
                    author: "Julia Child"
               },
               {
                    quote: "There is not a good or a bad cuisine, just the one you like the best.",
                    author: "Ferran Adria"
               },
               {
                    quote: "The discovery of a new dish does more for the happiness of mankind than the discovery of a star.",
                    author: "Anthelme Brillat-Savarin"
               },
               {
                    quote: "For me, cooking is an expression of the land where you are and the culture of that place.",
                    author: "Wolfgang Puck"
               },
               {
                    quote: "Hunger is the best spice.",
                    author: "Proverb"
               }
           ]
        }
    }


    componentDidMount() {
        this.randomQuoteGenerator();
        setInterval(
            this.randomQuoteGenerator,
            5000,
        );
    }

    randomQuoteGenerator = () => {
        const randomNum = Math.floor(Math.random() * this.state.quotes.length);
        const randomQuote = this.state.quotes[randomNum];
        this.setState({ randomQuote })
    }

    render() {

        const {quote} = this.state.randomQuote;
        const {author} = this.state.randomQuote;

        
        return (
            <div className="box-5">
                {quote}
                <br></br>
                {author}
            </div>
        )
    }
}

export default Quotes;



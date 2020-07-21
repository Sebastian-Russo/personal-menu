import React from 'react';

const Quotes = () => {

    const quotes = [
         {
            quote: "awesome quote",
            author: "first author"
        },
         {
            quote: "awesome quote",
            author: "second author"
        },
         {
            quote: "awesome quote",
            author: "third author"
        },
         {
            quote: "awesome quote",
            author: "awesome author"
        },
         {
            quote: "awesome quote",
            author: "awesome author"
        },
         {
            quote: "awesome quote",
            author: "awesome author"
        },
         {
            quote: "awesome quote",
            author: "awesome author"
        },
         {
            quote: "awesome quote",
            author: "awesome author"
        },
         {
            quote: "awesome quote",
            author: "awesome author"
        },
         {
            quote: "awesome quote",
            author: "awesome author"
        },
         {
            quote: "awesome quote",
            author: "awesome author"
        },    
         {
            quote: "awesome quote",
            author: "awesome author"
        }
    ];



    // const quote = quotes.filter(quote => quote.find(Object.keys(quote => {
    //     return quote.quote
    // })) 

        // return (
        //     <div>{quote.quote}</div>
        //     )
    // )

    // console.log(quote)

    // const quote = quotes.map((quote, i) => {
    //     return (
    //         <div key={`quote-${i}`}>{quote.quote} by {quote.author}</div>
    //     )
    // })

    const changeQuote = () => {
        console.log()
    
        setTimeout("changeQuote()", 1000)
    }

    return (
        <div className="box-5">

            <button onclick={changeQuote}>
            </button>

        </div>
    )
}

export default Quotes;





// const handleClick = (e) => {
//     console.log("hello")
//     const q = quotes[e.target.getAttribute("data-quote")]
// }

// const q = Object.keys(quotes).map((q, i) => (
//     <div
//         onClick={e => handleSetClick(e)}
//         data-quote={i}
//         key={i}
//     ></div>
// ))


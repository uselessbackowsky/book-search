import React from "react";

function Bookcard(prop) {
    console.log(prop.image)
    return (
        <div className="bookcard">
            <img src={prop.image}/>
            <div className="book-info">
                <h2 className="h2"> {prop.title}</h2>
                <h3 className="h3"> {prop.autor} </h3>
                <p className="paragraf"> {prop.published} {prop.data}</p>
            </div>
        </div>
    )
}

export default Bookcard
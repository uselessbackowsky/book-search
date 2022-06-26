import React from "react";

function SearchResoult(prop) {
    if(prop.books) {
        return (
            <div className="search-resoult"> search {prop.books.length}</div>
        )
    }
}

export default SearchResoult
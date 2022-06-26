import React from "react";
import Bookcard from "./Bookcard";

function Booklist(prop) {
    if(prop.books.books) {
        if(prop.select==='all') {
            return( 
                <div className="list">
                    {prop.books.books.map((book,i)=> {
                        if(book.volumeInfo.imageLinks) {
                            return <Bookcard 
                            key = {i}
                            image = {book.volumeInfo.imageLinks.thumbnail}
                            title = {book.volumeInfo.title}
                            autor ={book.volumeInfo.authors}
                            published = {book.volumeInfo.publisher}
                            data = {book.volumeInfo.publishedDate}
                            /> 
                        }
                        else {
                            return <Bookcard 
                            key = {i}
                            image = {'https://icdn.lenta.ru/images/2022/06/24/14/20220624141644522/square_320_424682369597b90b3ae112ecbc62f257.jpg'}
                            title = {book.volumeInfo.title}
                            autor ={book.volumeInfo.authors}
                            published = {book.volumeInfo.publisher}
                            data = {book.volumeInfo.publishedDate}
                            /> 
                        }
                    })}
                </div>)

    }
    else {
        let arraybook = prop.books.books.filter(book=>book.volumeInfo.categories[0].toLowerCase().includes(prop.select))
        return( 
            <div className="list">
                {arraybook.map((book,i)=> {
                    if(book.volumeInfo.imageLinks) {
                        return <Bookcard 
                        key = {i}
                        image = {book.volumeInfo.imageLinks.thumbnail}
                        title = {book.volumeInfo.title}
                        autor ={book.volumeInfo.authors}
                        published = {book.volumeInfo.publisher}
                        data = {book.volumeInfo.publishedDate}
                        /> 
                    }
                    else {
                        return <Bookcard 
                        key = {i}
                        image = {'https://icdn.lenta.ru/images/2022/06/24/14/20220624141644522/square_320_424682369597b90b3ae112ecbc62f257.jpg'}
                        title = {book.volumeInfo.title}
                        autor ={book.volumeInfo.authors}
                        published = {book.volumeInfo.publisher}
                        data = {book.volumeInfo.publishedDate}
                        /> 
                    }
                })}
            </div>)
       
    }
    }
}

export default Booklist
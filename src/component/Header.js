import React from "react";
import {useState} from "react";
import { BsSearch } from "react-icons/bs"
import request from "superagent";



const styles = {
    hd: {
    height: '250px',
    alignItems: 'center',
    },
    span: {
    display: 'inline',
    fontFamily: 'Fascinate, cursive',
    fontSize: '50px',
    color: 'white',
    textAlign: 'center'
    }  
}

function Header({onChange}) {
    const [value, setValue] = useState ('')

    function hendlerBooks(el) {
        onChange (el)
    }

    function search(event) {
        event.preventDefault()
        request
        .get('https://www.googleapis.com/books/v1/volumes')
        .query({q: value})
        .then((data)=> {
            hendlerBooks(data.body.items)
        })
    }
    function giveClass() {
        let classes = []
        if(value.trim()) {
            classes.push('input-open')
        }
        else {classes=['input']}
        return classes
    }

    return ( 
    <div className="header" style={styles.hd}>
        <span style={styles.span}> BOOK SEARCH</span>
        <div className="search-area">
            <form >
                <input className={giveClass()} type={'text'} name={''} placeholder = {'Type to search'} 
                    value= {value} onChange = {(event)=> {setValue(event.target.value)}}/>
                <button className="btn" onClick={search}><BsSearch className = {'search-btn'}/></button>
            </form>
        </div>
    </div>
    )
}

export default Header 
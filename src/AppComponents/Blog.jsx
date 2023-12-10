import React from "react";
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Home from "./Main";
import MainDisplay from "./Main";

function Blog() {

    return (
        <>
            <div style={{'marginTop':'18rem'}}>
                <MainDisplay />
            </div>
        </>
    )
}


export default Blog;
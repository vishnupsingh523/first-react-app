import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props){
    return (
        <div>
            <nav>
                <ul>
                    <li>{props.title1}</li>
                    <li>{props.title2}</li>
                    <li>{props.title3}</li>
                </ul>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string
}
Navbar.defaultProps ={
    title1:"Set title1",
    title2: "Set title2",
    title3: "Set title3"
}
import React from 'react'
import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}


//CSS IN JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black' 
// }


export default Header

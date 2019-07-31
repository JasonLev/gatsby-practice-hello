import React from 'react'

import { Link } from "gatsby"

function ContactPage(){
    return (
        <div>
            <h1>This is the Contact page!</h1>
            <h2>Let's put a link:</h2>
            <Link to="/">Go back to home</Link>
        </div>
    )
}
export default ContactPage
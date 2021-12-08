// Packages
import React from "react"

// Components
import Helmet from "./Helmet"

function Page(props) {
    return (
        <>
            <Helmet
                title={props.title}
                description={props.description}
                keywords={props.keywords}
            />

            {props.children}
        </>
    )
}

export default Page

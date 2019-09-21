import React from "react"

export const Header = (props) => (
    <div>
        <h1>Test {props.text}</h1>
        {props.children}
    </div>
)
import React from 'react'
import ChildComponent from './button'
interface button {
    content: string,
    count: string,
    image: string,
    description: string
}
function Button2(props: button) {
    return (
        <ChildComponent content={props.content} count={props.count} image={props.image} description={props.description} />
    )
}

export default Button2

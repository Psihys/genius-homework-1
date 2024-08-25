import React from 'react'

const GrandChildComponents = (props) => {
        console.log(props)
    return (
        <div>
            {props.MyNameArray[0]}
                
        </div>
    )
}

export default GrandChildComponents
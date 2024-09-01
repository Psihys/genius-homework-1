import React from 'react'
import { memo } from 'react'


const areEqual = (prevProps,nextProps) => {
    return prevProps.object.name !== nextProps.object.name
}

const SecondChildComponent = memo(() => {
    console.log('SecondChild rendered')
  return (
    <div>SecondChildComponent</div>
  )
})

export default SecondChildComponent
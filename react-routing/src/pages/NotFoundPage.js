import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div>
            NotFoundPage
            <Link style={{ color: 'blue' }} to=''>Press to go to the homepage</Link>
      </div>
  )
}

export default NotFoundPage
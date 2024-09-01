import { useEffect } from 'react'


const AnmountComponent = () => {
        useEffect(() => {
      return () => {
      console.log('componentWillAnmountMount useEffect')
    }
  }, []);
    return (
       
            <div>
                UnmountComponent
            </div>
       
    )
}

export default AnmountComponent
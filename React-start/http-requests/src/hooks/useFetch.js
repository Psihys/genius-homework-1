import { useEffect, useState } from "react"
import axios from "axios"

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState(false)


        const fetchData = async () => {
            setisLoading(true)
            try {
                const response = await axios.get(url)
                   setData(response.data)
            } catch (error) {
                console.warn(error)
                setError(error.message)
            } finally {
                
            setisLoading(false)
            
            }
            
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    
    return {data,isLoading,error}
}
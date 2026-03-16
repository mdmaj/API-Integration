import React ,{useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {
  const {products, error, loading} = customReactQuery('/api/products')
  if(error){
      return <h2>Unable to fetch products. Please try again later.</h2>
    }

    if(loading){
      return <h2>Loading products...</h2>
    }
  return (
    <>
    <h1>API Integration Learning</h1>
    <h2>NUmber of Products =  {products.length}</h2>
    

    </>
  )
}

export default App


const customReactQuery =(urlPath)=>{

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   axios.get('/api/products')
  //     .then(response => setProducts(response.data))
  //     .catch(error => console.error('Error fetching products:', error));
  // }, [])

  useEffect(() => {
    (async ()=>{
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(urlPath)
        setProducts(response.data)
      } catch (error) {
        setError(true);
        
      } finally {
        setLoading(false)
      }
    })()

  },[])


  return {products, error, loading}

}
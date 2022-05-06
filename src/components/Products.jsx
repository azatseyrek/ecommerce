import React, {useEffect, useState} from 'react'
import ShowPorducts from './ShowPorducts'

const Products = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)

  let componentMounted = true

  const getProducts = async () => {
    setLoading(true)
    const response = await fetch('https://fakestoreapi.com/products')

    if (componentMounted) {
      setData(await response.clone())
      setFilter(await response.json())
      setLoading(false)
      console.log(filter)
    }

    return (componentMounted = false)
  }
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
        <div className="row justify-content-center">
          {loading ? 'Loading...' : <ShowPorducts filter={filter} />}
        </div>
      </div>
    </div>
  )
}

export default Products

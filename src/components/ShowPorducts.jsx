/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const ShowPorducts = ({filter}) => {
  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2"> All</button>
        <button className="btn btn-outline-dark me-2"> Men's Clothes</button>
        <button className="btn btn-outline-dark me-2"> Women's Clothes</button>
        <button className="btn btn-outline-dark me-2"> Jewelery</button>
        <button className="btn btn-outline-dark me-2"> Electronic</button>
      </div>
      {filter.map((product) => {
        return (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 text-center p-4">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {product.title.substring(0, 12)}
                  ...
                </h5>
                <p className="card-text lead fw-bold">${product.price}</p>
                <a href="#" className="btn btn-outline-dark">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShowPorducts

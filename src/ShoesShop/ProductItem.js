import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
      const {product,onShowDetail} = this.props
    return (
      <div className='col-sm-4 mt-3'>
          <div className="card">
              <img src={product.image} alt="" />
              <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.price}$</p>
                  <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>onShowDetail(product)} className="btn btn-success">Add to cart <i className="fa-solid fa-cart-shopping"></i></button>
              </div>
          </div>
      </div>
    )
  }
}

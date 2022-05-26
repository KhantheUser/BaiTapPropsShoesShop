import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  render() {
      const {products,onShowDetail} = this.props
    return (
      <div className="row">
        {products.map((product,index)=>{
            return (
                <ProductItem onShowDetail={onShowDetail} key={index} product={product}/>
            )
        })}

      </div>
    )
  }
}

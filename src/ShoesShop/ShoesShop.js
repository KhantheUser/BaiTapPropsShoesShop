import React, { Component } from 'react'
import ProductDetail from './ProductDetail'
import ProductList from './ProductList'
import shoesData from './shoesData.json'
export default class ShoesShop extends Component {
    state = {
        selectedProduct : null
    }
    handleShowDetails = (product) => {
        this.setState({
            selectedProduct : product
        })
    }
  render() {
    return (
      <div className='container'>
          <h1 className="text-center">Shoes Shop</h1>
          <ProductList onShowDetail={this.handleShowDetails} products={shoesData}/>
          <ProductDetail product={this.state.selectedProduct}/>
      </div>
    )
  }
}

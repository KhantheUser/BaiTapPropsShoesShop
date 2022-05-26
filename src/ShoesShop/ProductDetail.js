import React, { Component } from 'react'

export default class ProductDetail extends Component {
  render() {
      const {product}=this.props;
      if(!product){
          return null
      }
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="row">
            <div className="col-sm-4">
              <img src={product.image} width="100%" alt="" />

            </div>
            <div className="col-sm-8">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Ten san pham</th>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <th>Alias</th>
                            <td>{product.alias}</td>
                        </tr>
                        <tr>
                            <th>Gia ban</th>
                            <td>{product.price}$</td>
                        </tr>
                        <tr>
                            <th>Mo ta</th>
                            <td>{product.description}</td>
                        </tr>
                        <tr>
                            <th>So luong</th>
                            <td>{product.quantity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    )
  }
}

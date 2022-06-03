import React, { Component } from 'react'
import { connect } from 'react-redux'
 class XucXac extends Component {
  render() {
    const {mangXucXac} =this.props

    return (
        
      <div className="d-flex mt-4">
          {mangXucXac.map((xucXac,index)=>{
              return (
                  <img key={index} height={50} src={xucXac.hinhAnh} alt="" />
              )
          })}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        mangXucXac: state.xucXac.mangXucXac
}
}
export default connect(mapStateToProps)(XucXac)


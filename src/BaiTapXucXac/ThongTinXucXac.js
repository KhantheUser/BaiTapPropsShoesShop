import React, { Component } from 'react'
import {connect} from 'react-redux'
 class ThongTinXucXac extends Component {
  render() {
    return (
      <div>
          <p style={{fontSize:30}}>Bạn chọn : {this.props.taiXiu ?(<span>Tai</span>) : (<span>Xiu</span>)}</p>
          <p style={{fontSize:30}}>Số bàn thắng :{this.props.tongBanThang}</p>
          <p style={{fontSize:30}}>Số lượt chơi : {this.props.tongBanChoi}</p>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        tongBanThang: state.xucXac.tongBanThang,
        tongBanChoi : state.xucXac.tongBanChoi,
        taiXiu : state.xucXac.taiXiu,
    }
}
export default connect(mapStateToProps)(ThongTinXucXac)

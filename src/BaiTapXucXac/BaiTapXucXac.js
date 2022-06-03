import React, { Component } from 'react'
import ThongTinXucXac from './ThongTinXucXac'
import XucXac from './XucXac'
import './xucXac.css'
import {connect} from 'react-redux'
 class BaiTapXucXac extends Component {
   
  render() {
    const { datCuoc} = this.props
    return (
      <div style={{backgroundImage:"url(./image/xucXac/bgGame.png)", height:1000}} className=''>
            <h1 className="text-center heading">Game Đổ Xúc Xắc</h1>
            <div className="row text-center">
              <div className="col-sm-5">
                <button onClick={()=>datCuoc(true)} className='btnButton'>Tài</button>
              </div>
              <div className="col-sm-2">
              <XucXac/>
              </div>
              <div className="col-sm-5">
                <button onClick={()=>datCuoc(false)} className='btnButton'>Xỉu</button>
              </div>
            </div>
            <div className="text-center">
            <ThongTinXucXac/>
            <button onClick={()=>this.props.playGame()}  className="btn btn-success">Play game</button>
            </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    datCuoc : (taiXiu)=>{
      const action = {
        type : "DAT_CUOC",
        taiXiu
      }
      dispatch(action)
    },
    playGame : ()=>{
      let mangNgauNhien = []
      const a = Math.floor(Math.random()*6) +1
      const b = Math.floor(Math.random()*6) +1
      const c=Math.floor(Math.random()*6) +1
      mangNgauNhien.push(a,b,c)
      const action = {
        type : "PLAY_GAME",
        mangNgauNhien
      }
      dispatch(action)
    }
  }
}
export default connect(null,mapDispatchToProps)(BaiTapXucXac)




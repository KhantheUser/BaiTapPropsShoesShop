
const initialState = {
    mangXucXac :[
        {ma:1 , hinhAnh: "./image/xucxac/1.png"},
        {ma:2 , hinhAnh: "./image/xucxac/2.png"},
        {ma:3 , hinhAnh: "./image/xucxac/3.png"},
        
    ],
    taiXiu : true,
    tongBanThang : 0,
    tongBanChoi : 0
}
const xucXacReducer =(state=initialState,action)=>{
    switch(action.type){
        case "DAT_CUOC":{
           return {...state,taiXiu : action.taiXiu}
        }
        case "PLAY_GAME":{
            const tongBanChoi = state.tongBanChoi +1 
            let total = action.mangNgauNhien.reduce((tong,item,index)=>{
                return tong+item
            })
            
            if((total<=11 && state.taiXiu===false)||(total>11 && state.taiXiu===true)){
                 state.tongBanThang +=1
            }

            const mangXucXac = action.mangNgauNhien.map((item,index)=>{
                return {ma:item,hinhAnh : `./image/xucxac/${item}.png`}
            })
            return {...state,tongBanChoi,mangXucXac}
        }
        default : return {...state}
    }
}
export default xucXacReducer
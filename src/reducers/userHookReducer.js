import * as actionType from '../ReactFormHook/constant/constant.js'
const initialState = {
    users : [],
    selectedUser : { id:"",
    code :"",
    name :"",
    email:"",
    phone :"",},
    isLoading : false,
    error : null
}
const userHookReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_USERS_PENDING:{
            return {...state, isLoading: true}
        }
        case actionType.GET_USERS_FULLFILLED :{
            return {...state,users:action.users,isLoading:false}
        }
        case actionType.GET_USER_DETAIL :{
            return {...state,selectedUser:action.user}
        }
        case actionType.GET_USERS_REJECTED :{
            return {...state,error:action.error,isLoading:true}
        }
        case actionType.SEARCH_USER :{
            console.log(action.keyword)
            let users =  action.users.filter((user,index)=>{
                return user.code.toLowerCase().includes(action.keyword.trim().toLowerCase())
            })
           
            return{...state,users}
        }
        
        default : return state
    }
}
export default userHookReducer
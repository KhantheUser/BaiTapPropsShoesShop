import axios from 'axios'
import * as actionType from '../constant/constant'
export const getUsers = () => {
    return async (dispatch,getState) => {
        try{
            dispatch({
                type:actionType.GET_USERS_PENDING
            })
            const response = await axios.get('https://62a56a23430ba53411c68c09.mockapi.io/api/user')
            dispatch({
                type : actionType.GET_USERS_FULLFILLED,
                users : response.data
            })
          
        }catch(e){
            dispatch({
                type : actionType.GET_USERS_REJECTED,
                error :e.response.data
            })
           
        }
    }
}
export const createUser=(user,callback)=>{
    return async (dispatch,getState)=>{
        try{
            await axios.post("https://62a56a23430ba53411c68c09.mockapi.io/api/user",user)
            dispatch(getUsers())
            callback()
        }catch(e){
            console.log(e)
        }
    }
}
export const deleteUser=(userId)=>{
  return async(dispatch,getState)=>{
    try{
        await axios.delete(`https://62a56a23430ba53411c68c09.mockapi.io/api/user/${userId}`)
        dispatch(getUsers())
    }catch(e){
        console.log(e);
    }
  }
}
export const getDetailUser =(userId)=>{
    return async (dispatch,getState)=>{
        try{
          const response=  await axios.get(`https://62a56a23430ba53411c68c09.mockapi.io/api/user/${userId}`)
            dispatch({
                type:actionType.GET_USER_DETAIL,
                user: response.data
            })
        }catch(e){
            console.log(e)
        }
    }
}
export const updateUser = (userId,user,callback)=>{
    return async (dispatch,getState)=>{
        try{
           await axios.put(`https://62a56a23430ba53411c68c09.mockapi.io/api/user/${userId}`,user)
           dispatch(getUsers())
           callback()
        }catch(e){
            console.log(e)
        }
    }
}
export const searchUser =(keyword)=>{
   return async (dispatch,getState)=>{
      try{
        const response = await axios.get('https://62a56a23430ba53411c68c09.mockapi.io/api/user')
        dispatch({
            type:actionType.SEARCH_USER,    
            users :response.data,
            keyword
        })
      }catch(e){
        console.log(e);
      }
   }
}
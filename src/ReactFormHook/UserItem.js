import React from 'react'
import {deleteUser,getDetailUser} from './action/userAction.js'
import {useDispatch} from 'react-redux'
function UserItem(props) {
    const {user} = props
    const dispatch = useDispatch()
    const handleDelete = (userId)=>{
        dispatch(deleteUser(userId))
    }
    const handleGetDetail =(userId)=>{
      dispatch(getDetailUser(userId))
    }
  return (
    <tr>
        <td>{user.code}</td>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>
        <button className='btn btn-success ' onClick={()=>handleGetDetail(user.id)}>Update</button>
          <button onClick={()=>handleDelete(user.id)} className='btn btn-danger ms-2'>Del</button>
        </td>
    </tr>
  )
}

export default UserItem
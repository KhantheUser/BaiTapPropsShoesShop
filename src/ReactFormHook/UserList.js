import React from 'react'
import {useSelector} from 'react-redux'
import UserItem from './UserItem'
function UserList() {
    const {users,isLoading} = useSelector((state)=>{
        
        return {
            users : state.userHook.users,
            isLoading : state.userHook.isLoading
        }
    })
    if(isLoading){
        return <img className='mt-3' src="./image/hookForm/loading.png" alt="" />
    }
  return (
    <table className='table mt-5'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Phone number</th>
                <th>Email</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,index)=>{
                return <UserItem key={index} user={user}/>
            })}
        </tbody>

    </table>
  )
}

export default UserList
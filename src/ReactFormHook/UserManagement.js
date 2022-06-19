import React ,{useEffect} from 'react'
import UserForm from './UserForm'
import UserList from './UserList'
import {useDispatch} from 'react-redux'
import {getUsers} from './action/userAction.js'
import UserSearch from './UserSearch'

function UserManagement() {
    const dispatch = useDispatch()
    const getUser = ()=>{
        dispatch(getUsers())
    }
    useEffect(()=>{
        getUser()
    },[])
    
  return (
    <div className='container'>
        <h1 className='text-center'>Student's Imformation</h1>
        <UserForm/>
        <UserSearch/>
        <UserList/>
    </div>
  )
}

export default UserManagement
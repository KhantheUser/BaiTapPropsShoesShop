import React ,{useState,useRef} from 'react'
import {useDispatch} from 'react-redux'
import { searchUser} from './action/userAction.js'

function UserSearch() {
  const [keyword,setKeyword] = useState('')
  const dispatch = useDispatch()
  const inputRef = useRef()
  const handleSearch =(e)=>{
  
    clearTimeout(inputRef.current)
    const keyword = e.target.value
    setKeyword(keyword)
    inputRef.current = setTimeout(()=>{
      dispatch(searchUser(keyword))
    },300)
    
      
    
       

  }
  return (
    <div className="d-flex justify-content-end mt-5">
    <input
      type="text"
      className="form-control"
      value={keyword}
      placeholder="Search product name"
      onInput={handleSearch}
    />
    <button
      className="btn btn-success"
      
    >
      Search
    </button>
  </div>

  )
}

export default UserSearch
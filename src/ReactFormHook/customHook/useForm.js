import {useEffect,useState} from 'react'
import {createUser,updateUser} from '../action/userAction.js'
import {useDispatch,useSelector} from 'react-redux'
function useForm() {

    const dispatch = useDispatch()
    const {selectedUser} = useSelector((state)=>{
        return {
            selectedUser : state.userHook.selectedUser
        }
    })
  
    const [values,setValues] = useState({
        code :"",
        name :"",
        email:"",
        phone :"",
    })
    const handleSubmit =(e)=>{
        e.preventDefault();
        const {id,...user}=values
       
        if(!validate()){
            return;
        }else if(!selectedUser.code){
            dispatch(createUser(values,handleSubmitSuccess))
        }else {
            dispatch(updateUser(id,user,handleSubmitSuccess))
        }

         
        

    }
    useEffect(()=>{
        setValues({
            ...selectedUser
        })
        
    },[selectedUser])
   
   
    const handleChange =(e)=>{
        const {value,name,id} =e.target
    
       document.getElementById(`tb${id}`).innerHTML =''
        setValues({...values, [name]: value})
    }
    const handleSubmitSuccess =()=>{
        setValues((state)=>{
            return {
                id:"",
                code :"",
                name :"",
                email:"",
                phone :"",
            }
        })
    }
    function required(value,spanId,message){
    
        if(!value){
            document.getElementById(spanId).style.display ="block"
            document.getElementById(spanId).innerHTML = message || "This field is required"
            return false
        }
        document.getElementById(spanId).innerHTML = ""
        return true;
    }
    function pattern(value,spanId,regex,message){
        if(!regex.test(value)){
            document.getElementById(spanId).style.display ="block"
    
           document.getElementById(spanId).innerHTML = message ||"Incorrect value"
           return false
        }
        document.getElementById(spanId).innerHTML =""
        return true;
       }
    const validate = ()=>{
        let isValid = true;
        const regexId = /^[A-Za-z0-9]+/g;
        const regexName = /^[A-z ]+$/g;
        const regexPhone = /[0-9 ]+$/g;
        const regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
        isValid &= required(values.code,"tbCode","Code is required")&& pattern(values.code,"tbCode",regexId,"Code is incorrect")
        isValid &= required(values.name,"tbName","Name is required")&& pattern(values.name,"tbName",regexName,"Name is incorrect")
        isValid &= required(values.email,"tbEmail","Email is required")&& pattern(values.email,"tbEmail",regexEmail,"Email is incorrect")
        isValid &= required(values.phone,"tbPhone","Phone is required")&& pattern(values.phone,"tbPhone",regexPhone,"Phone is incorrect")
        return isValid;
    }
   
  return {
    handleSubmit,
    handleChange,
    values
  }
      
  
}

export default useForm
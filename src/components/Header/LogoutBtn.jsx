import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import authService from '../../appwrite/auth';
import {logOut} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logOut().then(()=>dispatch(logOut));
    }
  return (
    <div>
      <button className='inline-block px-6 py-2 duration-200 
      hover:bg-blue-100 rounded-full'>Logout</button>
    </div>
  )
}

export default LogoutBtn

import { useState ,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import "./App.css";
import { login,logOut } from "./store/authSlice";
import {Header,Footer} from './components/index'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logOut())
      }
    })
    .finally(()=>setLoading(false))
  }, [])
  
  return !loading? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <Header/>
        <Footer/>
      </div>
    </>
  ):null;
}

export default App;

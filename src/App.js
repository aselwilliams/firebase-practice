import { useState } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from './firebase-config'
import './App.css';

function App() {
  const [registerEmail, setRegisterEmail]=useState('')
  const [registerPwd, setRegisterPwd]=useState('')
  const [loginEmail, setLoginEmail]=useState('')
  const [loginPwd, setLoginPwd]=useState('')
  const [user,setUser]=useState({})

  onAuthStateChanged(auth,(currentUser)=>{
   setUser(currentUser) 
  })

  const register= async ()=>{
    try{
      const user= await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPwd
      )
      console.log(user)
    } catch(error){
      console.log(error.message)
    }
  }
  const login= async ()=>{
    try{
      const user= await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPwd
      )
      console.log(user)
    } catch(error){
      console.log(error.message)
    }
  }
  const logout= async ()=>{
    await signOut(auth)
  }
  return (
    <div className="App">
      <div className='flex'>
        <h3>Register User</h3>
        <input placeholder='Email...' onChange={(e)=>setRegisterEmail(e.target.value)}/>
        <input placeholder='Password...' onChange={(e)=>setRegisterPwd(e.target.value)}/>

        <button onClick={register}>Create User</button>
      </div>

      <div className='flex'>
        <h3>Login</h3>
        <input placeholder='Email...' onChange={(e)=>setLoginEmail(e.target.value)}/>
        <input placeholder='Password...' onChange={(e)=>setLoginPwd(e.target.value)}/>

        <button onClick={login}>Login</button>
      </div>


      <div className='flex'>
      <h4>User Logged In: </h4>
      {user?.email}

      <button onClick={logout}>Sign Out</button>
      </div>
    </div>
  );
}

export default App;

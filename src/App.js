import { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from './firebase-config'
import './App.css';

function App() {
  const [registerEmail, setRegisterEmail]=useState('')
  const [registerPwd, setRegisterPwd]=useState('')
  const [loginEmail, setLoginEmail]=useState('')
  const [loginPwd, setLoginPwd]=useState('')

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

  }
  const logout= async ()=>{

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
        <input placeholder='Email...'/>
        <input placeholder='Password...'/>

        <button>Login</button>
      </div>


      <div className='flex'>
      <h4>User Logged In: </h4>

      <button>Sign Out</button>
      </div>
    </div>
  );
}

export default App;

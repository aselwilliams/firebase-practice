
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='flex'>
        <h3>Register User</h3>
        <input placeholder='Email...'/>
        <input placeholder='Password...'/>

        <button>Create User</button>
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

// Corrected code
import '../App.css';
import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { signin } from '../api/UserAuth';

function Login() {

  const { loginUser,loadingStatus } = useUser();

  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [user, serUserDetails] = useState({
    email:'',
    password:''
  });

  const handleSubmit = async (event) =>{
    // loadingStatus(true)
    event.preventDefault();
    const userAuth = await signin({
      email:user.email,
      password:user.password
    })

    if(userAuth.data.auth){
      setError(userAuth.data.message)
    }

    if(userAuth.data.auth){
      loginUser(userAuth.data.result.email)
      navigate('/home');
    }else{
      setError(userAuth.data.message)
    }
    // loadingStatus(false)
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
      {error && (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )}
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter your username" onChange={(e)=>{serUserDetails({...user,email:e.target.value})}}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>{serUserDetails({...user,password:e.target.value})}}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

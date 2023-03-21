import LoginImg from '../assets/images/amot-login.png';
import  Wrapper  from '../wrappers/LoginWrapper'
import { Button } from '../components'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function Login() {
  
  const {googleSignIn, user} = useAuth();
  const navigate = useNavigate();

  async function handleClick(){
    try {
      await googleSignIn();
    } catch (error) {
      console.error(error);
    }
  }

  
    if (user || Object.keys(user).length !== 0) {
      navigate('/directories');
    }


  return (
    <Wrapper>
        <div>
          <img src={LoginImg} alt="login-img" />
        </div>
       <Button text={"Login with Google"} onClick={handleClick}/>
    </Wrapper>
  )
}

export default Login
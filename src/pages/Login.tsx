import LoginImg from '../assets/images/amot-login.png';
import  Wrapper  from '../wrappers/LoginWrapper'
import { Button } from '../components'
import GoogleButton from 'react-google-button'
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
       <GoogleButton onClick={() => handleClick()} type="dark" label='Amot na dol!' style={{marginLeft: 20}}/>
       <footer>
        <p>Copyright © 2023 CpE Gwapo</p>
       </footer>
    </Wrapper>
  )
}

export default Login
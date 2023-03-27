import LoginImg from '../assets/images/amot-login.png';
import  Wrapper  from '../wrappers/LoginWrapper'
import { Button } from '../components'
<<<<<<< HEAD
import GoogleButton from 'react-google-button'
=======
>>>>>>> 1a4509e5c2ddcea83c2e0e9054e1a26fa151ad7e
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
<<<<<<< HEAD
       <GoogleButton onClick={() => handleClick()} type="dark" label='Amot na dol!' style={{marginLeft: 20}}/>
       <footer>
        <p>Copyright © 2023 CpE Gwapo</p>
       </footer>
=======
       <Button text={"Login with Google"} onClick={handleClick}/>
>>>>>>> 1a4509e5c2ddcea83c2e0e9054e1a26fa151ad7e
    </Wrapper>
  )
}

export default Login
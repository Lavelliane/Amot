import LoginImg from '../assets/images/amot-login.png';
import  Wrapper  from '../wrappers/LoginWrapper'
import { Button } from '../components'

function Login() {
  return (
    <Wrapper>
        <div>
          <img src={LoginImg} alt="login-img" />
        </div>
       <Button text={"Login with Google"}/>
    </Wrapper>
  )
}

export default Login
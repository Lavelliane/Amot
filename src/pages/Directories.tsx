import { Button } from "../components";
import { useAuth } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'

function Directories() {
  const {logout} = useAuth();
  const navigate = useNavigate();
  async function handleSignOut() {
    await logout();
    navigate('/');
  }
  return (
    <div>
        <Button text={"Logout"} onClick={() => handleSignOut()} />
    </div>
  )
}

export default Directories
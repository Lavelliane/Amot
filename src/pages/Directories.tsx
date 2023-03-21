import { Button } from "../components";
import { useAuth } from "../context/AuthContext"

function Directories() {
  const {logout} = useAuth();
  return (
    <div>
        <button onClick={() => logout()}>Logout</button>
    </div>
  )
}

export default Directories
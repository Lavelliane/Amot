import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Protected({children}: any) {
  const {user} = useAuth();
  if(!user || Object.keys(user).length === 0){
    return <Navigate to="/"/>
  }
  return children
}

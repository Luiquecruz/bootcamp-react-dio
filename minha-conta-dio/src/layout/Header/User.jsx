import { LogoUser } from "../../components/Logo"
import './user.css'

const User = () => {
  return (
    <header className="header-user">
      <LogoUser />
      <p>Header user</p>
    </header>
  )
}

export default User
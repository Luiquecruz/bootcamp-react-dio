import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import './user.css'

const User = () => {
  return (<>
    <section className="restricted-home-page">
      <div className="container py-14">
        <h1 className="max-w-[600px] text-white font-bold text-6xl leading-tight">
          Welcome to the next level ! ! !
        </h1>

        <Link to="/">
          <Button variant="primary" label="Log out" className="mt-6" />
        </Link>
      </div>
    </section>
  </>)
}

export default User
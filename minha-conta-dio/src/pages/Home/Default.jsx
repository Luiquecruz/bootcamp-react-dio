import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import './default.css'

const Default = () => {
  return (
    <section className="home-page">
      <div className="container py-14">
        <h1 className="max-w-[600px] text-white font-bold text-6xl leading-tight">Code your global future now!</h1>
        <p className="max-w-[600px] text-white my-9">Rule the technologies used by the most innovative companies in the world and face your new professional challenge, evolving in community with the best experts.</p>

        <Link to="/login">
          <Button variant="tertiary" label="Start now"/>
        </Link>
      </div>
    </section>
  )
}

export default Default
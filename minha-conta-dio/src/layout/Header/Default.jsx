import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import Button from '../../components/Button'
import './default.css'

const Default = () => {
  const menuItems = ['Carrers', 'Bootcamps', 'Projects', 'Community', 'Plans', 'For Enterprises']

  return (
    <header className="header-default">
      <nav>
        <Link to="/"><Logo /></Link>

        <div>
          <ul>
            {menuItems.map((item, i) => (
              <li key={i} className="max-lg:hidden">
                <Link to={`/${i}`}>{item}</Link>
              </li>
            ))}

            <li>
              <Link to="/login">
                <Button type="button" variant="outlined outlined-tertiary" label="Sign-in" />
              </Link>
            </li>
            <li>
              <Link to="/register">
                <Button type="button" variant="tertiary" label="Create account" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Default
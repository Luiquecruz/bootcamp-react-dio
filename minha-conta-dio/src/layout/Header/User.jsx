import { Link } from "react-router-dom"
import { LogoUser } from "../../components/Logo"
import Button from "../../components/Button"
import './user.css'

// Icons
function Bell() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-400">
      <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
    </svg>
  )
}

function Heart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-700">
      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
  )
}

function Profile() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400">
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
    </svg>
  )
}

const User = () => {
  const menuItems = ['Courses', 'Global Carrer', 'English Course', 'Job Board', 'Articles', 'Rooms']

  return (
    <header className="header-user">
      <Link to="/minha-conta"><LogoUser /></Link>

      <ul>
        {menuItems.map((item, i) => (
          <li key={i} className="max-lg:hidden">
            <Link to={`/${i}`}>{item}</Link>
          </li>
        ))}

        <li>
          <Link to="#">
            <Button type="button" variant="secondary" label="Be Global" className="rounded-full" />
          </Link>
        </li>
      </ul>

      <div className="actions">
        <Button variant="outlined" label="?" className="px-2.5 py-0.5 rounded-full bg-white text-black font-normal" />
        <Button variant="outlined" iconLeft={<Bell />} className="p-0 border-none" />
        <Button variant="outlined" iconLeft={<Heart />} label="5" className="px-3 py-1 rounded-full border-none bg-[#363537]" />
        <Button variant="outlined" iconLeft={<Profile />} className="px-1.5 py-1.5 rounded-full border-[3px] border-green-400" />
      </div>
    </header>
  )
}

export default User
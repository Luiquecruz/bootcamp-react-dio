import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import './login.css'

function Mail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-tertiary-light">
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  )
}

function Lock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-tertiary-light">
      <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
    </svg>
  )
}

const Login = () => {
  return (<>
    <section className="login-page">
      <div className="flex justify-around container py-14">
        <div className="max-lg:hidden max-w-[320px]">
          <span className="block rounded-full h-2 w-24 bg-gradient-to-r from-tertiary-light from-5%" />
          <h2 className="font-bold text-white text-3xl mt-10">
            The platform for you to learn from experts, master the main technologies and enter the most desired companies faster.
          </h2>
        </div>

        <div className="max-lg:mx-auto w-full max-w-[320px]">
          <span className="block rounded-full h-2 w-24 bg-gradient-to-r from-tertiary-light from-5%" />
          <h1 className="font-bold text-white text-3xl mt-10">Are you registered yet?</h1>
          <p className="text-white mt-4 mb-6">Login in nd make the change._</p>

          <form>
            <Input icon={<Mail />} id="email" type="email" label="email" placeholder="E-mail" required={true} />
            <Input icon={<Lock />} id="password" type="password" label="password" placeholder="Password" required={true} />

            <Button variant="tertiary" label="SIGN IN" className="login-btn" />

            <Link to="/register">
              <span className="block mt-10 text-center text-green-400 hover:underline">Create an account</span>
            </Link>
          </form>
        </div>
      </div>
    </section>
  </>)
}

export default Login
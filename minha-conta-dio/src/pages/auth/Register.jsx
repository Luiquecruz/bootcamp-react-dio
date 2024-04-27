import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import Button from '../../components/Button'
import Input from '../../components/Input'
import './register.css'

function Profile() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-tertiary-light">
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
    </svg>
  )
}

function Mail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-tertiary-light">
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  )
}

function Phone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-tertiary-light">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
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

const Register = () => {
  const navigate = useNavigate()
  const { register, handleSubmit} = useForm()
  const onSubmit = async (data) => {
    await fetch('http://localhost:3434/users', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => {
      res.json()
      return navigate('/minha-conta',  { replace: true })
    })
      .catch(error => console.error(error))
  }

  return (<>
    <section className="register-page">
      <div className="flex justify-around container py-14">
        <div className="max-lg:hidden max-w-[320px]">
          <span className="block rounded-full h-2 w-24 bg-gradient-to-r from-tertiary-light from-5%" />
          <h2 className="font-bold text-white text-3xl mt-10">
            The platform for you to learn from experts, master the main technologies and enter the most desired companies faster.
          </h2>
        </div>

        <div className="max-lg:mx-auto w-full max-w-[416px]">
          <span className="block rounded-full h-2 w-24 bg-gradient-to-r from-tertiary-light from-5%" />
          <h1 className="font-bold text-white text-3xl mt-10">Start now free</h1>
          <p className="text-white mt-4 mb-6">Create your account and make the change._</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input icon={<Profile />} id="profile" type="text" label="profile" placeholder="Full name"
                   register={register} name="profile" rules={{required: true, maxLength: 128}} />
            <Input icon={<Mail />} id="email" type="email" label="email" placeholder="E-mail"
                   register={register} name="email" rules={{required: true}} />
            <Input icon={<Phone />} id="phone" type="tel" label="phone" placeholder="+55 (99) 99999-9999"
                   register={register} name="phone" rules={{maxLength: 20}} />
            <Input icon={<Lock />} id="password" type="password" label="password" placeholder="Password"
                   register={register} name="password" rules={{required: true, maxLength: 12}} />

            <small className="block mt-14 text-white">
              By clicking "Create my free account", I hereby agree to the
              <Link to="#" className="text-tertiary-light hover:underline"> Privacy Policies </Link>
              of the DIO <Link to="#" className="text-tertiary-light hover:underline"> Terms of Use</Link>.
            </small>

            <Button type="submit" variant="tertiary" label="Create my free account" className="w-full mt-10" />

            <p className="mt-10 text-center text-white">
              Already have an account? <Link to="/login" className="text-green-400 hover:underline">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </>)
}

export default Register
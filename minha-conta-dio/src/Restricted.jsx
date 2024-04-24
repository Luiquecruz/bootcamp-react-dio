import { Outlet } from "react-router-dom";

import { HeaderUser } from "./layout/Header";

import Button from "./components/Button";
import Input from "./components/Input";

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
    </svg>
  )
}

const Restricted = () => {
  return (<>
    <HeaderUser />
    <main className="min-h-[calc(100dvh_-_78px)] bg-content-user">
      <Outlet />
    </main>

    <p><strong>COMPONENTS</strong></p>
    <Button />
    <Button variant="secondary" label="Button secondary" />
    <Button variant="tertiary" label="Button tertiary" />

    <Input />
    <Input icon={<Icon />} id="" type="email" label="" placeholder="Enter an e-mail address" required={true} />
  </>)
}

export default Restricted
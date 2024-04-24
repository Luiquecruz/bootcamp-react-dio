import { Outlet } from "react-router-dom";

import { HeaderUser } from "./layout/Header";

const Restricted = () => {
  return (<>
    <HeaderUser />
    <main className="min-h-[calc(100dvh_-_70px)] bg-content-user">
      <Outlet />
    </main>
  </>)
}

export default Restricted
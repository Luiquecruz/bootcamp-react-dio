import { Outlet } from "react-router-dom";

import { Header } from "./layout/Header";

function App() {
  return (<>
    <Header />
    <main className="min-h-[calc(100dvh_-_74px)] bg-content">
      <Outlet />
    </main>
  </>);
}

export default App;

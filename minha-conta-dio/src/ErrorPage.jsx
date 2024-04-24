import { useRouteError, useNavigate } from "react-router-dom"
import Button from "./components/Button"

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
    </svg>
  )
}

const ErrorPage = () => {
  const error = useRouteError()
  const history = useNavigate()

  return (<>
    <main className="flex items-center justify-center min-h-dvh p-10 bg-content">
      <div className="bg-content-user text-white text-center p-10 rounded-lg shadow-lg">
        <h1 className="font-bold text-2xl">Página não encontrada!</h1>
        <p className="my-6">{error.statusText || error.message}</p>
        <Button iconLeft={<Icon />} className="mx-auto" label="Voltar" onClick={() => history(-1)} />
      </div>
    </main>
    </>)
}

export default ErrorPage
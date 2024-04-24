import { useRouteError } from "react-router-dom"
import Button from "./components/Button"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <h1>Página não encontrada</h1>
      <p>{error.statusText || error.message}</p>
      <Button label="Voltar" />
    </>
  )
}

export default ErrorPage
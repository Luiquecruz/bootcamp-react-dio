import Home from "./Pages/Home"
import Header from "./Components/Header"

const App = () => {
  return (
    <>
      <Header />
      <main className="max-w-xl mx-auto">
        <Home />
      </main>
    </>
  )
}

export default App
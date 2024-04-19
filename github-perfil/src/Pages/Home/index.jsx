import { useState, useEffect } from "react"
import Repository from "../../Components/Repository"

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const [userRepos, setUserRepos] = useState([])

  const DEFAULT_USER_URL = 'https://api.github.com/users/Luiquecruz'
  const DEFAULT_USER_REPOS_URL = 'https://api.github.com/users/Luiquecruz/repos'
  const USERS_URL = `https://api.github.com/users/${username}`
  const USER_REPOS_URL = `https://api.github.com/users/${username}/repos`

  const handleUsers = async (e) => {
    e.preventDefault()

    setIsLoading(true)
    await fetch(USERS_URL).then(res => res.json()).then(userData => {
      setCurrentUser(userData)
      setIsLoading(false)
    })

    if (currentUser) {
      setIsLoading(true)
      await fetch(USER_REPOS_URL).then(res => res.json()).then(reposData => {
        setUserRepos(reposData)
        setIsLoading(false)
      })
    }
  }

  useEffect(() => {
    const getInitialUserData = async () => {
      setIsLoading(true)
      await fetch(DEFAULT_USER_URL).then(res => res.json()).then(userData => {
        setCurrentUser(userData)
        setIsLoading(false)
      })
    }

    const getInitialRepos = async () => {
      setIsLoading(true)
      await fetch(DEFAULT_USER_REPOS_URL).then(res => res.json()).then(reposData => {
        setUserRepos(reposData)
        setIsLoading(false)
      })
    }
    getInitialUserData()
    getInitialRepos()
  }, [])

  return (
    <>
      <section className=" mt-8">
        <form className="relative" onSubmit={handleUsers}>
          <label htmlFor="search" className="sr-only">Buscar</label>
          <input type="text" id="search" placeholder="@username"
                  className="bg-stone-800 text-stone-200 text-sm tracking-wide rounded-full outline-none focus:ring focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5 pl-4"
                  value={username}
                  onChange={e => setUsername(e.target.value)}/>

          <button type="button" className="absolute right-0.5 top-0.5 bg-stone-900 rounded-full p-1.5 hover:bg-stone-950 transition shadow-md"
                  title="Buscar" onClick={handleUsers}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </form>
      </section>

      <section className="my-8">
        {isLoading && (
          <div className="animate-pulse flex gap-4 p-4 mb-4 bg-stone-800 rounded-2xl">
            <div className="min-w-32 h-32 rounded-2xl bg-stone-700"></div>
            <div className="w-full">
                <div className="p-2 rounded mt-2 w-2/3 bg-stone-700"></div>
                <div className="p-1.5 rounded mt-2 w-2/4 bg-stone-700"></div>
                <div className="p-1.5 rounded mt-2 w-full bg-stone-700"></div>
            </div>
          </div>
        )}

        {!isLoading && (
          <div className="flex gap-4 bg-stone-800 p-4 rounded-2xl">
            <img src={currentUser?.avatar_url || 'https://placehold.co/250'} alt="Luique Cruz Profile"
                className="w-32 h-32 rounded-2xl border-2 border-stone-700 shadow-md" />

            <div>
              <h2 className="text-xl font-bold">{currentUser?.name || 'Nome do usuário'}</h2>
              <h3 className="text-sm text-stone-500">{`@${currentUser.login || 'username'}`}</h3>
              <p className="mt-2 text-sm text-stone-400">{currentUser.bio}</p>
            </div>
          </div>
        )}
      </section>

      {isLoading && (
        <section className="pb-6">
          <h4 className="text-xl font-bold mb-6">Repositórios</h4>
          <ul className="flex flex-col gap-4">
            {Array.from({length: 5}).map((_,i) => (
              <div key={i} className="animate-pulse p-4 bg-stone-900 rounded-2xl">
                <div className="p-2 rounded mt-2 w-2/3 bg-stone-700"></div>
                <div className="p-1.5 rounded mt-2 w-full bg-stone-700"></div>
              </div>
            ))}
          </ul>
        </section>
      )}

      {userRepos.length > 0 && (
        <section className="pb-6">
          <h4 className="text-xl font-bold mb-6">Repositórios</h4>

          <ul className="flex flex-col gap-4">
            {userRepos.map(repo => <Repository key={repo.id} url={repo.html_url} title={repo.name} description={repo.description} />)}
          </ul>
        </section>
      )}
    </>
  )
}

export default Home
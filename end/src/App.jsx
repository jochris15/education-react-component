
import { useState } from "react"
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"

function App() {
  const [page, setPage] = useState("login")

  return (
    <>
      <div className="p-5">
        {page === 'login' && <LoginPage setPage={setPage} />}
        {page === 'home' && <HomePage setPage={setPage} />}
      </div>
    </>
  )
}

export default App

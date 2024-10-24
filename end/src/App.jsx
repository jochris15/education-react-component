import { useState } from 'react'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import AddProductPage from './components/AddProductPage'

export default function App() {
    const [page, setPage] = useState('login')

    return (
        <>
            <div className="p-5">
                <Navbar setPage={setPage} />
                {page === 'login' && <LoginPage />}
                {page === 'home' && <HomePage />}
                {page === 'add' && <AddProductPage />}
            </div >
        </>
    )
}
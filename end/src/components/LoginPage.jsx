import { useState } from "react"

export default function LoginPage({ setPage }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <div className="min-h-screen flex items-center justify-center w-full">
                <div className="rounded-lg px-8 py-6 w-1/3 bg-blue-400 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
                    <form action="#">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium ">
                                Email Address : <b>{email}</b>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-white rounded-2xl w-full px-3 py-2 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                                placeholder="your@email.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium">
                                Password : <b>{password}</b>
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="bg-white rounded-2xl w-full px-3 py-2 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="w-full mt-5 justify-center py-2 px-4 border-2 border-black rounded-2xl text-sm font-medium text-white bg-gray-700 hover:bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)]" onClick={() => setPage("home")}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
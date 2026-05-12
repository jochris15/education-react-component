import { useState } from "react"
import json from "../assets/product.json"
import Navbar from "../components/Navbar"
import Card from "../components/Card"

export default function Home({ setPage }) {
    const [products, setProducts] = useState(json)
    return (
        <>
            <Navbar setPage={setPage} />
            {/* home */}
            <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
                <main className="my-5 bg-white grid grid-cols-4 gap-5">
                    {products.map((product, index) => {
                        return <Card product={product} index={index} key={index} />
                    })}
                </main>
            </div>
        </>
    )
}
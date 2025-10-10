import { useState } from "react"
import productJson from "../assets/product.json"
import Navbar from "./Navbar"
import Card from "./Card"

export default function HomePage({ setPage }) {
    const [products, setProducts] = useState(productJson)

    return (
        <>
            <Navbar setPage={setPage} />
            <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
                <main className="my-5 bg-white grid grid-cols-4 gap-5">
                    {products.map((product, index) => {
                        return <Card product={product} index={index} key={product.id} />
                    })}
                </main>
            </div>
        </>
    )
}
import { useState } from "react"
import json from "../assets/product.json"
import Navbar from "./Navbar"
import Card from "./Card"

export default function HomePage({ setPage }) {
    const [products, setProducts] = useState(json)

    return (
        <>
            <Navbar setPage={setPage} />
            <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
                <main className="my-5 bg-white grid grid-cols-4 gap-5">
                    {products.map((el, index) => {
                        return <Card el={el} index={index} key={el.id} />
                    })}
                </main>
            </div>
        </>
    )
}
import { useState } from 'react'

export default function App() {
    const [products, setProducts] = useState([
        {
            "id": 36,
            "name": "credo",
            "description": "ryuryu",
            "price": 933918,
            "stock": 39,
            "imgUrl": "https://picsum.photos/seed/DXQs6olFa/100/100",
            "categoryId": 5,
            "authorId": 1,
            "createdAt": "2024-01-08T08:48:04.240Z",
            "updatedAt": "2024-01-16T08:34:47.860Z",
            "Category": {
                "id": 5,
                "name": "molestiae",
                "createdAt": "2024-01-08T08:48:03.891Z",
                "updatedAt": "2024-01-08T08:48:03.891Z"
            }
        },
        {
            "id": 46,
            "name": "deripio",
            "description": "Administratio cur commodo quaerat adicio coadunatio. Tergiversatio admitto casus vindico atqui aperiam corrupti. Arguo acies cauda sopor despecto sol delectus.",
            "price": 645429,
            "stock": 26,
            "imgUrl": "https://loremflickr.com/100/100?lock=1784188751577088",
            "categoryId": 9,
            "authorId": 9,
            "createdAt": "2024-01-08T08:48:04.241Z",
            "updatedAt": "2024-01-08T08:48:04.241Z",
            "Category": {
                "id": 9,
                "name": "confido",
                "createdAt": "2024-01-08T08:48:04.164Z",
                "updatedAt": "2024-01-08T08:48:04.164Z"
            }
        },
        {
            "id": 49,
            "name": "dolores",
            "description": "Antea adicio succedo bestia aro. Adfero accendo suffragium ventus abduco venia. Vulnero denuo dedico.",
            "price": 997976,
            "stock": 57,
            "imgUrl": "https://picsum.photos/seed/ltij70mU/100/100",
            "categoryId": 5,
            "authorId": 9,
            "createdAt": "2024-01-08T08:48:04.241Z",
            "updatedAt": "2024-01-08T08:48:04.241Z",
            "Category": {
                "id": 5,
                "name": "molestiae",
                "createdAt": "2024-01-08T08:48:03.891Z",
                "updatedAt": "2024-01-08T08:48:03.891Z"
            }
        },
        {
            "id": 51,
            "name": "tergum",
            "description": "Sto antepono defungo confero error provident angustus. Vae uberrime callide summisse. Deduco ultio cimentarius.",
            "price": 220085,
            "stock": 56,
            "imgUrl": "https://loremflickr.com/100/100?lock=1516564245381120",
            "categoryId": 5,
            "authorId": 4,
            "createdAt": "2024-01-08T08:48:04.241Z",
            "updatedAt": "2024-01-08T08:48:04.241Z",
            "Category": {
                "id": 5,
                "name": "molestiae",
                "createdAt": "2024-01-08T08:48:03.891Z",
                "updatedAt": "2024-01-08T08:48:03.891Z"
            }
        },
        {
            "id": 45,
            "name": "comis",
            "description": "Ventosus absum bis vulgo verecundia. Blanditiis vinco temeritas suppono supra utpote accedo tubineus. Sustineo officia atque contigo.",
            "price": 462039,
            "stock": 63,
            "imgUrl": "https://loremflickr.com/100/100?lock=6859192212127744",
            "categoryId": 6,
            "authorId": 7,
            "createdAt": "2024-01-08T08:48:04.241Z",
            "updatedAt": "2024-01-08T08:48:04.241Z",
            "Category": {
                "id": 6,
                "name": "mollitia",
                "createdAt": "2024-01-08T08:48:03.959Z",
                "updatedAt": "2024-01-08T08:48:03.959Z"
            }
        },
        {
            "id": 48,
            "name": "carmen",
            "description": "Sumo voluptatibus comptus tot autus vito vix ipsam libero. Timidus beatae acceptus voluptatem possimus condico strenuus asperiores. Charisma clamo vehemens allatus sint quo.",
            "price": 900964,
            "stock": 11,
            "imgUrl": "https://loremflickr.com/100/100?lock=4847748205510656",
            "categoryId": 6,
            "authorId": 7,
            "createdAt": "2024-01-08T08:48:04.241Z",
            "updatedAt": "2024-01-08T08:48:04.241Z",
            "Category": {
                "id": 6,
                "name": "mollitia",
                "createdAt": "2024-01-08T08:48:03.959Z",
                "updatedAt": "2024-01-08T08:48:03.959Z"
            }
        },
        {
            "id": 50,
            "name": "verbum",
            "description": "Nulla surculus stultus. Optio amo commemoro. Virtus sperno ara.",
            "price": 386634,
            "stock": 6,
            "imgUrl": "https://loremflickr.com/100/100?lock=6884995687776256",
            "categoryId": 10,
            "authorId": 4,
            "createdAt": "2024-01-08T08:48:04.241Z",
            "updatedAt": "2024-01-08T08:48:04.241Z",
            "Category": {
                "id": 10,
                "name": "studio",
                "createdAt": "2024-01-08T08:48:04.232Z",
                "updatedAt": "2024-01-08T08:48:04.232Z"
            }
        },
        {
            "id": 59,
            "name": "perferendis",
            "description": "Conscendo nobis solus turba textus ducimus damnatio incidunt. Commodo vere ratione cubo. Vulariter umerus vilicus careo crustulum adfectus subseco stips soluta.",
            "price": 875344,
            "stock": 50,
            "imgUrl": "https://loremflickr.com/100/100?lock=1596407918100480",
            "categoryId": 3,
            "authorId": 3,
            "createdAt": "2024-01-08T08:48:04.242Z",
            "updatedAt": "2024-01-08T08:48:04.242Z",
            "Category": {
                "id": 3,
                "name": "aut",
                "createdAt": "2024-01-08T08:48:03.755Z",
                "updatedAt": "2024-01-08T08:48:03.755Z"
            }
        },
        {
            "id": 57,
            "name": "viscus",
            "description": "Accedo utor vacuus admoneo terminatio valens decumbo pecto aperiam carbo. Statua xiphias iure. Arbitro bibo pecto varius solus quasi odio ipsum.",
            "price": 476260,
            "stock": 50,
            "imgUrl": "https://picsum.photos/seed/bO7BHGMd/100/100",
            "categoryId": 1,
            "authorId": 9,
            "createdAt": "2024-01-08T08:48:04.242Z",
            "updatedAt": "2024-01-08T08:48:04.242Z",
            "Category": {
                "id": 1,
                "name": "calco",
                "createdAt": "2024-01-08T08:48:03.618Z",
                "updatedAt": "2024-01-08T08:48:03.618Z"
            }
        },
        {
            "id": 52,
            "name": "cito",
            "description": "Vester bos vapulus vestrum tripudio. Adstringo vulgus demum tero omnis curatio pariatur. Vulgus asper sortitus aranea adficio autus exercitationem deserunt bestia.",
            "price": 75652,
            "stock": 83,
            "imgUrl": "https://loremflickr.com/100/100?lock=7870711081205760",
            "categoryId": 7,
            "authorId": 1,
            "createdAt": "2024-01-08T08:48:04.242Z",
            "updatedAt": "2024-01-14T09:55:56.175Z",
            "Category": {
                "id": 7,
                "name": "ager",
                "createdAt": "2024-01-08T08:48:04.027Z",
                "updatedAt": "2024-01-08T08:48:04.027Z"
            }
        },
        {
            "id": 55,
            "name": "delinquo",
            "description": "Aggero adsum deporto. Decens adficio tristis coaegresco arcesso consequatur. Vigor numquam clarus arca.",
            "price": 252942,
            "stock": 100,
            "imgUrl": "https://loremflickr.com/100/100?lock=8596275247185920",
            "categoryId": 10,
            "authorId": 4,
            "createdAt": "2024-01-08T08:48:04.242Z",
            "updatedAt": "2024-01-08T08:48:04.242Z",
            "Category": {
                "id": 10,
                "name": "studio",
                "createdAt": "2024-01-08T08:48:04.232Z",
                "updatedAt": "2024-01-08T08:48:04.232Z"
            }
        },
        {
            "id": 54,
            "name": "certe",
            "description": "Viridis nemo delectus caste. Quaerat assentator astrum incidunt cur trepide utilis adaugeo vulgivagus. Numquam astrum decor vesica.",
            "price": 541721,
            "stock": 40,
            "imgUrl": "https://picsum.photos/seed/Bxt6l/100/100",
            "categoryId": 6,
            "authorId": 10,
            "createdAt": "2024-01-08T08:48:04.242Z",
            "updatedAt": "2024-01-08T08:48:04.242Z",
            "Category": {
                "id": 6,
                "name": "mollitia",
                "createdAt": "2024-01-08T08:48:03.959Z",
                "updatedAt": "2024-01-08T08:48:03.959Z"
            }
        }
    ]);
    const [categories, setCategories] = useState([
        {
            "id": 1,
            "name": "calco",
            "createdAt": "2024-01-08T08:48:03.618Z",
            "updatedAt": "2024-01-08T08:48:03.618Z"
        },
        {
            "id": 2,
            "name": "vae",
            "createdAt": "2024-01-08T08:48:03.686Z",
            "updatedAt": "2024-01-08T08:48:03.686Z"
        },
        {
            "id": 3,
            "name": "aut",
            "createdAt": "2024-01-08T08:48:03.755Z",
            "updatedAt": "2024-01-08T08:48:03.755Z"
        },
        {
            "id": 4,
            "name": "brevis",
            "createdAt": "2024-01-08T08:48:03.823Z",
            "updatedAt": "2024-01-08T08:48:03.823Z"
        },
        {
            "id": 5,
            "name": "molestiae",
            "createdAt": "2024-01-08T08:48:03.891Z",
            "updatedAt": "2024-01-08T08:48:03.891Z"
        },
        {
            "id": 6,
            "name": "mollitia",
            "createdAt": "2024-01-08T08:48:03.959Z",
            "updatedAt": "2024-01-08T08:48:03.959Z"
        },
        {
            "id": 7,
            "name": "ager",
            "createdAt": "2024-01-08T08:48:04.027Z",
            "updatedAt": "2024-01-08T08:48:04.027Z"
        },
        {
            "id": 8,
            "name": "temporibus",
            "createdAt": "2024-01-08T08:48:04.096Z",
            "updatedAt": "2024-01-08T08:48:04.096Z"
        },
        {
            "id": 9,
            "name": "confido",
            "createdAt": "2024-01-08T08:48:04.164Z",
            "updatedAt": "2024-01-08T08:48:04.164Z"
        },
        {
            "id": 10,
            "name": "studio",
            "createdAt": "2024-01-08T08:48:04.232Z",
            "updatedAt": "2024-01-08T08:48:04.232Z"
        }
    ])

    return (
        <>
            <div className="p-5">
                {/* navbar */}
                <nav className="sticky top-0 z-10 p-3 bg-purple-400 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] flex justify-center">
                    <div>
                        <a className="text-2xl font-bold px-6 cursor-pointer text-white">
                            <span>Login</span>
                        </a>
                        <a className="text-2xl font-bold px-6 cursor-pointer">
                            <span>Home</span>
                        </a>
                        <a className="text-2xl font-bold px-6 cursor-pointer">
                            <span>Add Product</span>
                        </a>
                        <a className="text-2xl font-bold px-6 cursor-pointer text-white">
                            <span>Logout</span>
                        </a>
                    </div>
                </nav>
                <br />

                {/* login */}
                <div className="min-h-screen flex items-center justify-center w-full">
                    <div className="rounded-lg px-8 py-6 w-1/3 bg-blue-400 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
                        <form action="#">
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium ">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                                    placeholder="your@email.com"
                                    autoComplete='current-email'
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                                    placeholder="Enter your password"
                                    autoComplete='current-password'
                                />
                            </div>
                            <button className="w-full mt-5 justify-center py-2 px-4 border-2 border-black rounded-2xl text-sm font-medium text-white bg-gray-700 hover:bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                Login
                            </button>
                        </form>
                    </div>
                </div>

                {/* home */}
                <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
                    <main className="my-5 bg-white grid grid-cols-4 gap-5">
                        {products.map((product) => {
                            return (
                                <div key={product.id}>
                                    {/* card */}
                                    <div className="flex flex-col flex-start items-center bg-yellow-400 border-2 border-black p-5 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full">
                                        <div>
                                            <img
                                                src={product.imgUrl}
                                                alt="product image"
                                                className="border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                                            />
                                        </div>
                                        <div className="flex flex-col divide-y divide-black">
                                            <b className="mt-5">{product.name}</b>
                                            <p>
                                                {product.description.length > 100 ? product.description.substring(0, 100) + " . . ." : product.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </main>
                </div>


                {/* add form */}
                <form className="p-5 mt-5 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-red-400">
                    <h1 className="text-2xl font-bold text-center mb-4">Add New Product</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="label">
                                <span className="font-bold">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="font-bold">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Description"
                                className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="font-bold">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter Price"
                                className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="font-bold">Stock</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter Stock"
                                className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="font-bold">Image (URL)</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Image URL"
                                className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="font-bold">Category</span>
                            </label>
                            <select
                                className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                                name="category"
                                id=""
                            >
                                {categories.map((c) => {
                                    return (
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="w-full mt-5 justify-center py-2 px-4 border-2 border-black rounded-2xl text-sm font-medium text-white bg-gray-700 hover:bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                            Add New Product
                        </button>
                    </div>
                </form>
            </div >
        </>
    )
}
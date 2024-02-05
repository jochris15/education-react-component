import { useState } from 'react'
import './App.css'

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
            {/* Navbar */}
            <nav className="navbar sticky top-0 z-10 p-3 bg-gray-100 shadow">
                <div className="navbar-start">
                    <a className="text-2xl font-bold px-6">
                        <span className="text-blue-300">Login</span>
                    </a>
                </div>
                <div className="navbar-center">
                    <a className="text-2xl font-bold px-6">
                        <span className="text-accent">Home</span>
                    </a>
                    <a className="text-2xl font-bold px-6">
                        <span className="text-accent">Add product</span>
                    </a>
                </div>
                <div className="navbar-end">
                    <a className="text-2xl font-bold px-6">
                        <span className="text-red-300">Logout</span>
                    </a>
                </div>
            </nav>

            {/* Home */}
            <div id="PAGE-HOME" className="p-5">
                {/* search */}
                <form action="" method="get" className="flex justify-center items-center">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="input input-bordered input-accent w-24 md:w-auto mx-1 input-sm"
                    />
                </form>

                <main className="grid grid-cols-2 gap-5 px-10 my-8 bg-white">
                    {products.map(product => {
                        return (
                            <>
                                <div className="card bg-gray-100 shadow-2xl flex flex-row">
                                    <figure>
                                        <img
                                            src={product.imgUrl}
                                            alt="product image"
                                        />
                                    </figure>
                                    <div className="card-body flex-1">
                                        <b>{product.description}</b>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </main>
            </div >

            {/* Login */}
            <div className="relative flex flex-col justify-center h-[85dvh] overflow-hidden bg-base-100">
                <div className="w-full p-6 m-auto rounded-lg shadow-md lg:max-w-lg bg-base-200">
                    <h1 className="text-3xl font-semibold text-center text-accent-focus">
                        Log In
                    </h1>

                    <form className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Email"
                                className="w-full input input-bordered input-accent"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="w-full input input-bordered input-accent"
                            />
                        </div>
                        <div>
                            <button className="btn btn-accent">Log In</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* add product form */}
            <form className=" grid grid-cols-2 gap-4">
                <div>
                    <label className="label">
                        <span className="text-base label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full input input-bordered input-primary"
                    />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Description"
                        className="w-full input input-bordered input-primary"
                    />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter Price"
                        className="w-full input input-bordered input-primary"
                    />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Stock</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter Stock"
                        className="w-full input input-bordered input-primary"
                    />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Image (URL)</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Image URL"
                        className="w-full input input-bordered input-primary"
                    />
                    {/* <a href="" class="text-xs ml-1 text-gray-600 hover:text-primary">Want to upload a file instead?</a> */}
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Category</span>
                    </label>
                    <select
                        className="w-full input input-bordered input-primary"
                        name="category"
                        id=""
                    >
                        {categories.map(c => {
                            return <option key={c.id} value={c.id}>{c.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button className="btn btn-accent">Add New Product</button>
                </div>
            </form>
        </>
    )
}
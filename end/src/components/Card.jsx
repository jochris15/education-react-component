export default function Card({ product, index }) {
    return (
        <>
            <div className={index % 2 === 0 ? "bg-yellow-400 h-full flex flex-col justify-center items-center border-2 border-black p-5 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]" : "bg-blue-400 h-full flex flex-col justify-center items-center border-2 border-black p-5 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"} key={product.id}>
                <div className="flex flex-1">
                    <img
                        src={product.imgUrl}
                        alt="product image"
                        className="border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    />
                </div>
                <div className="flex flex-col divide-y divide-black">
                    <b className="mt-5">{product.name}</b>
                    <p className="line-clamp-4">
                        {product.description}
                    </p>
                </div>
            </div>
        </>
    )
}
import Image from "next/image"
import Link from "next/link"

function ProductItem({ product }) {
    return (
        <div className='rounded-lg bg-slate-900 m-5'>
            <Image src={product.image} width={400} height={400} className="rounded-t-lg object-cover w-full" />

            <div className="flex flex-col items-center justify-center p-5">
                <Link href={`/produt/${product.id}`}>
                    <h2 className="text-lg ">{product.title}</h2>
                </Link>
                <p className="mt-2 rtl text-slate-300  ">{product.price} تومان</p>
                <button className="border border-slate-300 text-slate-300 rounded-lg px-3 py-2 mt-3 hover:bg-slate-800 ">
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
    )
}

export default ProductItem
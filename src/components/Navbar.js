
import Link from "next/link"
import { useSelector } from "react-redux"



function Navbar() {

    const { cartItems } = useSelector(((state) => state.cart))


    return (
        <header className="container m-auto p-4" >
            <nav className="flex justify-between items-center h-12 border-b-2 border-slate-500">
                <Link href="/" className="text-lg">
                    Headphone Market
                </Link>
                <Link href="/cart" className="text-lg">
                    <span className="p-2">
                        {cartItems.reduce((acc, cur) => acc + cur.qty, 0)}
                    </span>
                    سبد خرید
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
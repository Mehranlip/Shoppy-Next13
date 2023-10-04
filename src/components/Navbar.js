


import Link from "next/link"



function Navbar() {
    return (
        <header className="container m-auto p-4" >
            <nav className="flex justify-between items-center h-12 border-b-2 border-slate-500">
                <Link href="/" className="text-lg">
                    Headphone Market
                </Link>
                <Link href="/cart" className="text-lg">
                    سبد خرید
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
import Link from "next/link";

export default function TopNav() {
    return (
        <nav className="text-white flex items-center px-4 bg-e5e7eb h-16 justify-between">
            <h1 className="text-xl font-bold">
                <Link href='/' className='hover:underline'>Next.js Showcase</Link>
                </h1>
            <ul>
                <li className="ml-6"><Link href="/" className="hover:underline">Home</Link></li>
                <li className="ml-6"><Link href="/about" className="hover:underline">About</Link></li>
            </ul>
        </nav>
    )
}
import Link from "next/link"

export default function Home() {
    return (
        <>
            <h1>Home page</h1>
            <Link href="/blog">Blog Page <br/></Link>
            <Link href="/products">Products Page</Link>
        </>
    )
}

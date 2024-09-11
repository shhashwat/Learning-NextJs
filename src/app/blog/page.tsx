import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Blog",
    }
}

export default function Blog() {
    return <h1 className="text-3xl font-bold underline">This is a page about Blogs</h1>;
}
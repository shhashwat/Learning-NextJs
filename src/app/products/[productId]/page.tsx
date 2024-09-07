import { Metadata } from "next";

type Props = {
    params: {
        productId: string,
    }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`iPhone ${params.productId}`);
        }, 100)
    })
    return {
        title: `${title}`,
    }
}


export default function ProductId( {params}: Props ) {
    return <h1 className="text-3xl font-bold underline">ProductId: {params.productId}</h1>;
}
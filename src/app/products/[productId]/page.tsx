export default function ProductId( {params}:{
    params: { productId: string }
} ) {
    return <h1 className="text-3xl font-bold underline">Tanishka lover pro maxx: {params.productId}</h1>;
}
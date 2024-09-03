import { notFound } from "next/navigation";

export default function ReviewDetail( {params}:{
    params: {
        productId: string;
        reviewId: string;
    }
} ) {
    if(parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return <h1 className="text-3xl font-bold underline">
        Simp Review for Tanishka: {params.reviewId}.  Form simp: {params.productId}
    </h1>;
} 
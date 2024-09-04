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
        Person Review for Product: {params.reviewId}.  Form Person: {params.productId}
    </h1>;
} 
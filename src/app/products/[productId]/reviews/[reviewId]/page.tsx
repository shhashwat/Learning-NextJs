import { notFound } from "next/navigation";

function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}

export default function ReviewDetail( {params}:{
    params: {
        productId: string;
        reviewId: string;
    }
} ) {
    const random = getRandomInt(2);

    if(random == 1) throw new Error("Error in loading the review");

    if(parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return <h1 className="text-3xl font-bold underline">
        Person Review for Product: {params.reviewId}.  Form Person: {params.productId}
    </h1>;
} 
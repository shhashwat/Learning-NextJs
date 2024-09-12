"use client";

export default function ErrorBoundary({error}:{
    error: Error}){
    return(
        <>
            <h1>{error.message}</h1>
        </>
    )
}
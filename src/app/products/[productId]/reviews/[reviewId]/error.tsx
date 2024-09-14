"use client";

export default function ErrorBoundary({
    error,
    reset,
}:{
    error: Error;
    reset: () => void;
}){
    return(
        <>
            <h1>
            the error is : {error.message}
            <br />
            <button onClick={reset}>Reload</button>
            </h1>
        </>
    )
}
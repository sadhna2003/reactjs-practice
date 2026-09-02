"use client";
import React from "react";

const Counter = () => {
    const [count, setCount] = React.useState(0)

    const handleIncrement = () => {
        setCount((prev) => prev + 1)
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount((prev) => prev - 1)
        } else {
            return
        }
    }
    return (
        <section className="container mx-auto max-w-6xl w-full h-96">
            <div className="flex flex-col gap-8 w-full items-center py-20 border border-gray-500 bg-sky-100 rounded-md mt-20 max-w-2xl mx-auto">
                <p className="font-bold font-sans text-9xl">{count}</p>
                <div className="flex flex-row font-sans gap-6 w-full p-6 justify-center">
                    <button
                        type="button"
                        disabled={count===0}
                        onClick={handleDecrement}
                        className="block w-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        Decrement
                    </button>
                    <button
                        type="button"
                        onClick={handleIncrement}
                        className="block w-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Increment
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Counter
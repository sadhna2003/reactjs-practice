"use client";
import React, { useEffect } from "react";

const CharacterCounter = () => {
    const [inputValue, setInputValue] = React.useState("")
    const [count, setCount] = React.useState(0)
    const handleCount = (value: string) => {
        const noOfcharacter = value.length
        setCount(noOfcharacter)
    }
    const handleChange = (e: any) => {
        const val = e.target.value;
        setInputValue(val)

    }
    useEffect(() => {
        handleCount(inputValue)
    }, [inputValue])
    return (
        <section className="flex flex-col justify-center h-96 font-sans">
            <div className=" rounded-sm border border-violet-500 bg-white p-6 flex flex-col items-center justify-center w-full container mx-auto max-w-2xl gap-6">
                <h1 className="text-3xl font-bold text-center">Character Counter</h1>
                <textarea
                    value={inputValue}
                    placeholder="Enter characters"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    rows={5}
                    onChange={(e) => handleChange(e)}
                />
                <p className="text-xl text-purple-500">Total no. of Character : {count}</p>
            </div>
        </section>
    )
}
export default CharacterCounter;
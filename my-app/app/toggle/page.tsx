"use client";
import React from "react";

const Toggle = () => {
    const [show, setShow] = React.useState(false)
    const [password, setPassword] = React.useState("")

    const handleShow = () => {
        setShow((prev)=> !prev)
    }
    return (
        <section className="bg-orange-100 font-sans h-full min-h-screen">
            <div className="border border-orange-300 space-y-4 bg-orange-100 rounded-sm p-4 container mx-auto w-full max-w-xl mt-10">
                <h1>Show Hide Password Field</h1>
                <input
                    type={show ? "text" : "password"}
                    value={password}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="button"
                    onClick={handleShow}
                    className="block w-24 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {show ? "Hide" : "Show"}
                </button>
            </div>
        </section>
    )
}
export default Toggle
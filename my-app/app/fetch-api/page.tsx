"use client";
import { getUsers, Users } from "@/api/users/user.service";
import React, { useEffect } from "react";

const FetchApi = () => {
    const [userData, setUserData] = React.useState<Users[]>()
    const [loading, setLoading] = React.useState(true)
    const fetchData = async () => {
        const data = await getUsers()
        if (data) {
            setUserData(data)
            setLoading(false)
        }
    }
    const handleRefresh = () => {
        setLoading(true)
        fetchData()
    }
    useEffect(() => {

        fetchData()

    }, [])

    return (
        <section className="font-sans w-full container mx-auto max-w-5xl flex flex-col items-center jsutify-center gap-8">
            <h1 className="text-3xl font-semibold text-center">Example of Fetch API</h1>
            <div className="flex flex-row w-full justify-end">
                <button
                    type="button"
                    className="block cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed"
                    onClick={handleRefresh}
                    disabled={loading}
                >
                    Refresh
                </button>
            </div>
            <ul className="grid grid-cols-3 gap-3 w-full">
                {!loading && userData && userData.map((user, index) => {
                    return (
                        <li
                            key={user.id + index}
                            className="p-6 border border-indigo-400 bg-white rounded-sm flex flex-col gap-2 items-starts"
                        >
                            <p><span className="font-medium">Name:</span> {user.name}</p>
                            <p><span className="font-medium">Username:</span> {user.username}</p>
                            <p><span className="font-medium">Email:</span> {user.email}</p>
                            <p><span className="font-medium">phone:</span> {user.phone}</p>
                            <p><span className="font-medium">Website:</span> {user.website}</p>
                        </li>
                    )
                })}
                {!loading && !userData &&
                    <li

                        className="p-6 text-2xl font-medium col-span-3 w-full text-center h-40"
                    >
                        Oops! No user found.
                    </li>

                }

            </ul>
            {loading &&
                <div className="flex flex-row justify-center w-full items-center h-40">
                    <div className="border-t-2 border-indigo-500 w-8 h-8 animate animate-spin p-2 rounded-full"></div>
                </div>
            }
        </section>
    )
}
export default FetchApi;
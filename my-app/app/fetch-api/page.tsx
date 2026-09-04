"use client";
import { getUsers, Users } from "@/api/users/user.service";
import React, { useEffect } from "react";

const FetchApi = () => {
    const [userData, setUserData] = React.useState<Users[]>()
    const [loading, setLoading] = React.useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers()
            if (data) {
                setUserData(data)
                setLoading(false)
            }
        }
        fetchData()

    }, [])

    return (
        <section className="font-sans w-full container mx-auto max-w-5xl flex flex-col items-center jsutify-center gap-8">
            <h1 className="text-3xl font-semibold text-center">Example of Fetch API</h1>
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
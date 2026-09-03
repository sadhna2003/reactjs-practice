"use client";
import React from "react";
import data from "@/app/search-filter/users.json";
const SearchFilter = () => {
    const [search, setSearch] = React.useState("")
    const [filteredUser, setFilteredUser] = React.useState(data.data)
    const handleChange = (e: any) => {
        const val = e.target.value
        setSearch(val)
    }
    React.useEffect(() => {
        if (search) {
            const filtered = data.data.filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
            );

            setFilteredUser(filtered);
        } else {
            setFilteredUser(data.data);
        }
    }, [search]);
    return (
        <section className="font-sans w-full min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center">Users Data Search Filter</h1>
            <div className="container mx-auto max-w-2xl w-full border border-indigo-500 p-4 mt-10 rounded-sm bg-white">
                <div className="flex flex-row gap-4 p-4 justify-start items-center w-full">
                    <input
                        type="text"
                        value={search}
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        placeholder="Enter character to search"
                        onChange={(e) => handleChange(e)}
                    />
                    <button
                        type="button"
                        onClick={() => setSearch("")}
                        className="block w-24 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed"           >
                        Clear
                    </button>
                </div>
                <ul className="p-4 space-y-3">
                    {filteredUser.map((user, index) => {
                        return (
                            <li key={user.id + index} className="bg-indigo-100 p-4">
                                {user.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
export default SearchFilter;
"use client";
import React, { act } from "react";
import data from "@/app/pagination/users.json"
const Pagination = () => {
    const [activePage, setActivePage] = React.useState(1)
    const pageLimit = 3;
    const totalPage = Math.ceil(data.data.length / pageLimit);
    const startIndex = (activePage - 1) * pageLimit;

    const currentPageContent = data.data.slice(
        startIndex,
        startIndex + pageLimit
    );

    const handlePrev = () => {
        setActivePage((prev) => prev - 1);
    };

    const handleNext = () => {
        setActivePage((prev) => prev + 1);
    };

    return (
        <section className="container mx-auto max-w-2xl w-full space-y-4 font-sans p-6">
            <h1 className="text-center text-2xl font-semibold">Users Listing</h1>
            <ul className="space-y-3">
                {currentPageContent.map((item: any, index: number) => {
                    return (
                        <li key={item.id + index} className="flex flex-col gap-2 rounded-sm bg-white border border-blue-400 p-4 items-start justify-start">
                            <p>Name: {item.name}</p>
                            <p>Email: {item.email}</p>
                        </li>
                    )
                })}
            </ul>
            <div className="flex flex-row gap-4 w-full justify-center items-center">
                <button
                    type="button"
                    className="disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer w-auto border border-blue-500 rounded-sm bg-blue-500 text-white p-2"
                    disabled={activePage === 1}
                    onClick={handlePrev}
                >
                    Prev
                </button>
                <span>Page {activePage} of {totalPage}</span>
                <button
                    type="button"
                    className="disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer w-auto border border-blue-500 rounded-sm bg-blue-500 text-white p-2"
                    disabled={activePage === totalPage}
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </section>
    )
}

export default Pagination;
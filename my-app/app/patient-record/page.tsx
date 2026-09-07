"use client";
import React from "react";

const initialPatients = [
    {
        id: 1,
        name: "Rahul Sharma",
        age: 32,
        gender: "Male",
        condition: "Fever",
    },
    {
        id: 2,
        name: "Priya Patel",
        age: 27,
        gender: "Female",
        condition: "Migraine",
    },
    {
        id: 3,
        name: "Amit Kumar",
        age: 45,
        gender: "Male",
        condition: "Diabetes",
    },
    {
        id: 4,
        name: "Sneha Verma",
        age: 36,
        gender: "Female",
        condition: "Asthma",
    },
];
const PatientRecordPage = () => {
    const [patients, setPatients] = React.useState(initialPatients);
    const [filteredPatients, setFilteredPatients] = React.useState(initialPatients);
    const [search, setSearch] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleChage = (e: any) => {
        const val = e.target.value
        setSearch(val)
    }

    const handleRefresh = () => {
        setLoading(true)
        // Simulate a refresh action (e.g., fetching new data)
        setTimeout(() => {
            setFilteredPatients(patients);
            setSearch("");
            setLoading(false);
        }, 1000);
    }

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (!search.trim()) {
                setFilteredPatients(patients);
                return;
            }

            const data = patients.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );

            setFilteredPatients(data);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [search, patients]);

    return (
        <section className="container mx-auto p-4 font-sans">
            <h1 className="font-semibold text-3xl text-center">Patient Record Page</h1>
            {/* Add your patient record components and logic here */}
            <div className="flex flex-row w-full gap-3 justify-start mt-6">
                <input
                    type='text'
                    value={search}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    onChange={(e) => handleChage(e)}
                />
                <button
                    type="button"
                    className="block cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed"
                    onClick={handleRefresh}
                    disabled={loading}
                >
                    Refresh
                </button>
            </div>
            <table className="w-full border border-gray-300 mt-6">
                <thead>
                    <tr className="bg-gray-200 font-medium text-gray-700">
                        <th className="p-2">Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Condition</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {!loading && filteredPatients.length === 0 && (
                        <tr>
                            <td colSpan={5} className="text-center p-4 text-gray-500">
                                No patients found.
                            </td>
                        </tr>
                    )}
                    {loading && (
                        <tr>
                            <td colSpan={5} className="text-center p-4 text-gray-500">
                                Loading...
                            </td>
                        </tr>
                    )}

                    {!loading && filteredPatients.length > 0 && filteredPatients.map((patient) => (
                        <tr key={patient.id} className="border-t border-gray-300 text-center">
                            <td className="p-2">{patient.name}</td>
                            <td className="p-2">{patient.age}</td>
                            <td className="p-2">{patient.gender}</td>
                            <td className="p-2">{patient.condition}</td>
                            <td className="p-2">
                                <div className="flex flex-row gap-2 justify-center">
                                <button
                                    type="button"
                                    className="block cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed"
                                    onClick={handleRefresh}
                                >
                                    Add
                                </button>
                                   <button
                                    type="button"
                                    className="block cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed"
                                    onClick={handleRefresh}
                                >
                                    Delete
                                </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
export default PatientRecordPage;
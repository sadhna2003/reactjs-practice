"use client";
import { AddPatientForm, PatientProps } from "@/components/AddPatientForm";
import { Dialog } from "@/components/Dialog";
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
    const [patients, setPatients] = React.useState<PatientProps[]>(initialPatients);
    const [filteredPatients, setFilteredPatients] = React.useState<PatientProps[]>(initialPatients);
    const [search, setSearch] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
    const [selectedPatient, setSelectedPatient] = React.useState<PatientProps | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setSearch(val)
    }

    const handleDelete = (id: number|string) => {
        const updatedPatients = patients.filter((patient) => patient.id !== id);
        setPatients(updatedPatients);
        setFilteredPatients(updatedPatients);
    }

    const handleEdit = (updatedPatient: PatientProps) => {
        console.log("updated patient", updatedPatient);

        setPatients((prevPatients) => {
            const index = prevPatients.findIndex((p) => p.id === updatedPatient.id);
            // console.log("index",index);

            if (index !== -1) {
                // console.log("inside if");

                const newPatients = [...prevPatients];
                newPatients[index] = updatedPatient;
                return newPatients;
            }
            //  console.log("outside if");
            return prevPatients;
        });
        setFilteredPatients((prevPatients) => {
            const index = prevPatients.findIndex((p) => p.id === updatedPatient.id);
            if (index !== -1) {
                const newPatients = [...prevPatients];
                newPatients[index] = updatedPatient;
                return newPatients;
            }
            return prevPatients;
        });
        setIsEditDialogOpen(false);
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
                    onChange={(e) => handleChange(e)}
                />
                <button
                    type="button"
                    className="block cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed"
                    onClick={handleRefresh}
                    disabled={loading}
                >
                    Refresh
                </button>
                <button
                    type="button"
                    className="block cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed"
                    onClick={() => setIsDialogOpen(true)}
                >
                    Add
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
                                        onClick={() => {
                                            setSelectedPatient(patient);
                                            setIsEditDialogOpen(true);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="block cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed"
                                        onClick={() => handleDelete(patient.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Dialog isOpen={isDialogOpen} onClose={() => { setIsDialogOpen(false) }} containerClassName="w-1/2">
                <h2 className="text-xl font-semibold mb-4">Add New Patient</h2>
                <AddPatientForm onAddPatient={(newPatient) => {
                    setPatients((prevPatients:PatientProps[]) => [...prevPatients, newPatient]);
                    setFilteredPatients((prevPatients:PatientProps[]) => [...prevPatients, newPatient]);
                    setIsDialogOpen(false);
                }} />
            </Dialog>
            <Dialog isOpen={isEditDialogOpen} onClose={() => { setIsEditDialogOpen(false) }} containerClassName="w-1/2">
                <h2 className="text-xl font-semibold mb-4">Edit Patient</h2>
                {/* Add your edit patient form here */}
                <AddPatientForm onAddPatient={(updatedPatient) => {
                    handleEdit(updatedPatient);
                }} isEditing={true} existingPatient={selectedPatient as any} />
            </Dialog>

        </section>
    );
}
export default PatientRecordPage;
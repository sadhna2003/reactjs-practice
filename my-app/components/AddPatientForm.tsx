"use client";
import React from "react";
export type PatientProps = {
   id: number|string;
   name: string;
   age: number;
   gender: string;
   condition: string;
};
export const AddPatientForm = ({ onAddPatient, isEditing, existingPatient }: { onAddPatient: (patient: PatientProps) => void; isEditing?: boolean; existingPatient?: PatientProps }) => {
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [gender, setGender] = React.useState("Male");
    const [condition, setCondition] = React.useState("");

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !age || !gender || !condition) {
            alert("Please fill in all fields.");
            return;
        }
        const newPatient = {
            id: isEditing && existingPatient ? existingPatient.id : Date.now(),
            name,
            age: parseInt(age),
            gender,
            condition: condition || "New Condition", // Default condition, can be modified later
        };
        // console.log("form data",newPatient);
        
        onAddPatient(newPatient);
        setName("");
        setAge("");
        setGender("Male");
        setCondition("");
    };

    React.useEffect(() => {
        if (isEditing && existingPatient) {
            // Populate the form with existing patient data for editing
            // This is just a placeholder; you would typically fetch the patient data based on an ID or similar

            setName(existingPatient.name);
            setAge(existingPatient.age.toString());
            setGender(existingPatient.gender);
            setCondition(existingPatient.condition);
        }
    }, [isEditing, existingPatient]);

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-field"
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-field"
            />
            <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="form-field"
            >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <input
                type="text"
                placeholder="Condition"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="form-field"
            />
            <button type="submit" className="block cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed">
                {isEditing ? "Update Patient" : "Add Patient"}
            </button>
        </form>
    );
}
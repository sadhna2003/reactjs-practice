"use client";
import React, { useState } from "react";

type UserData = {
    name: string;
    email: string;
    phoneNumber: string[];
};
type FormErrors = {
    name?: string;
    email?: string;
    phoneNumber?: string[];
};

const DynamicForm = () => {
    const [formData, setFormData] = useState<UserData>({
        name: "",
        email: "",
        phoneNumber: [""],
    })
    const [errors, setErrors] = useState<FormErrors>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddPhoneNumber = () => {
        setFormData((prevData) => ({
            ...prevData,
            phoneNumber: [...prevData.phoneNumber, ""],
        }));
    };

    // Update specific phone number

    const handlePhoneChange = (
        index: number,
        value: string
    ) => {
        setFormData((prevData) => ({
            ...prevData,

            phoneNumber: prevData.phoneNumber.map(
                (phone, phoneIndex) =>
                    phoneIndex === index ? value : phone
            ),
        }));
    };


    // Remove phone number

    const handleRemovePhoneNumber = (index: number) => {
        setFormData((prevData) => ({
            ...prevData,

            phoneNumber: prevData.phoneNumber.filter(
                (_, phoneIndex) => phoneIndex !== index
            ),
        }));
    };

    // validations
    const validateForm = () => {
        const validationErrors: FormErrors = {};

        if (!formData.name.trim()) {
            validationErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            validationErrors.email = "Email is invalid";
        }

        const phoneErrors: string[] = [];

        formData.phoneNumber.forEach((phone) => {
            const trimmedPhone = phone.trim();

            if (!trimmedPhone) {
                phoneErrors.push("Phone number is required");
            } else if (!/^\d{10}$/.test(trimmedPhone)) {
                phoneErrors.push(
                    "Phone number must contain exactly 10 digits"
                );
            } else {
                phoneErrors.push("");
            }
        });

        if (phoneErrors.some((error) => error !== "")) {
            validationErrors.phoneNumber = phoneErrors;
        }

        return validationErrors;
    };


    const handleFormSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const validationErrors = validateForm();

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        console.log(
            "Form submitted successfully:",
            formData
        );

        alert("Form submitted successfully!");

        // Reset
        setFormData({
            name: "",
            email: "",
            phoneNumber: [""],
        });

        setErrors({});
    };

    return (
        <section className="container bg-white mx-auto max-w-2xl w-full h-full font-sans py-2 space-y-4">
            <h1 className="text-3xl font-semibold text-center mt-4">Dynamic Form</h1>
            <form onSubmit={handleFormSubmit} className="mx-auto max-w-xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-900">
                            Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="John"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                        <p className="text-red-500 text-sm">{errors.name}</p>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="john.doe@example.com"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    </div>

                    <div className="mb-6 sm:col-span-2">
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-semibold text-gray-900">
                                Phone Numbers
                            </label>

                            {formData.phoneNumber.length < 5 && (
                                <button
                                    type="button"
                                    onClick={handleAddPhoneNumber}
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-white"
                                >
                                    + Add Phone
                                </button>
                            )}
                        </div>

                        {formData.phoneNumber.map(
                            (phone, index) => (
                                <div
                                    key={index}
                                    className="mb-4"
                                >
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={phone}
                                            onChange={(e) =>
                                                handlePhoneChange(
                                                    index,
                                                    e.target.value
                                                )
                                            }
                                            placeholder="9876543210"
                                            className="block w-full rounded-md border border-gray-300 px-3 py-2"
                                        />

                                        <button
                                            type="button"
                                            disabled={
                                                formData.phoneNumber.length ===
                                                1
                                            }
                                            onClick={() =>
                                                handleRemovePhoneNumber(
                                                    index
                                                )
                                            }
                                            className="rounded-md bg-red-500 px-3 py-2 text-white disabled:opacity-40"
                                        >
                                            Remove
                                        </button>
                                    </div>

                                    {errors.phoneNumber?.[index] && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {
                                                errors.phoneNumber[
                                                index
                                                ]
                                            }
                                        </p>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div className="mt-10">
                    <button
                        type="submit"
                        className="block disabled:opacity-60 disabled:cursor-not-allowed w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </section>
    )
}
export default DynamicForm;
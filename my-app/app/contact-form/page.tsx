"use client"
import React from "react"

type FormErrors = {
    firstName?: string;
    lastName?: string;
    company?: string;
    email?: string;
    phoneNumber?: string;
    message?: string;
    agreeToPolicies?: string;
};

const Contact = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phoneNumber: '',
        message: '',
        agreeToPolicies: false,
    })
    const [submitting, setSubmitting] = React.useState(false)
    const [errors, setErrors] = React.useState<FormErrors>({})

    const validateForm = (): FormErrors => {
        const errors: FormErrors = {};

        if (!formData.firstName.trim()) {
            errors.firstName = "First name is required";
        } else if (formData.firstName.trim().length < 3) {
            errors.firstName = "First name must be at least 3 characters";
        }

        if (!formData.lastName.trim()) {
            errors.lastName = "Last name is required";
        } else if (formData.lastName.trim().length < 3) {
            errors.lastName = "Last name must be at least 3 characters";
        }

        if (!formData.company.trim()) {
            errors.company = "Company is required";
        } else if (formData.company.trim().length < 3) {
            errors.company = "Company must be at least 3 characters";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Please enter a valid email address";
        }

        if (!formData.phoneNumber.trim()) {
            errors.phoneNumber = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            errors.phoneNumber = "Please enter a valid phone number (e.g., 123-456-7890)";
        }

        if (!formData.message.trim()) {
            errors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            errors.message = "Message must be at least 10 characters";
        }

        if (!formData.agreeToPolicies) {
            errors.agreeToPolicies = "You must agree to the privacy policy";
        }

        return errors;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }))
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            console.log(errors);
            setErrors(errors);
            return;
        }
        setSubmitting(true)
        setErrors({})
        console.log("submitted data", formData);

        setTimeout(() => {
            setSubmitting(false)
            setFormData({
                firstName: '',
                lastName: '',
                company: '',
                email: '',
                phoneNumber: '',
                message: '',
                agreeToPolicies: false,
            })
            alert("Form submitted successfully!")
        }, 2000)


    }

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact sales</h2>
                <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
            </div>
            <form onSubmit={handleFormSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-900">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="John"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                        <p className="text-red-500 text-sm">{errors.firstName}</p>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm/6 font-semibold text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Doe"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                        <p className="text-red-500 text-sm">{errors.lastName}</p>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                            Company
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="Acme Inc."
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                        <p className="text-red-500 text-sm">{errors.company}</p>
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
                    <div className="sm:col-span-2">
                        <label htmlFor="phoneNumber" className="block text-sm/6 font-semibold text-gray-900">
                            Phone number
                        </label>
                        <div className="mt-2.5">
                            <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        aria-label="Country"
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    >
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                    </select>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="123-456-7890"
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Write your message here..."
                                aria-label="Message"
                                rows={4}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"

                            />
                        </div>
                        <p className="text-red-500 text-sm">{errors.message}</p>
                    </div>
                    <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                                <input
                                    id="agreeToPolicies"
                                    name="agreeToPolicies"
                                    type="checkbox"
                                    checked={formData.agreeToPolicies}
                                    onChange={handleInputChange}
                                    aria-label="Agree to policies"
                                    className="absolute inset-0 size-full appearance-none focus:outline-hidden"
                                />
                            </div>
                        </div>
                        <label htmlFor="agreeToPolicies" className="text-sm/6 text-gray-600">
                            By selecting this, you agree to our{' '}
                            <a href="#" className="font-semibold whitespace-nowrap text-indigo-600">
                                privacy policy
                            </a>
                            .
                        </label>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="block disabled:opacity-60 disabled:cursor-not-allowed w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Contact
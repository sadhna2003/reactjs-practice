"use client";
import React from "react";

export const Dialog = ({ isOpen, onClose, children , containerClassName}: { isOpen: boolean; onClose: () => void; children: React.ReactNode; containerClassName?: string }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <div className={["bg-white p-6 rounded shadow-lg w-1/3 ", containerClassName].join(" ")}>
                {children}
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
                    Close
                </button>
            </div>
        </div>
    );
}
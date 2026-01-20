import React, { useState } from "react";

export default function Accordion({ title, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="rounded-xl border border-[#e6ecff] bg-white shadow-sm overflow-hidden">
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
                <span className="text-[16px] font-bold text-[#0f172a]">{title}</span>

                {/* Down Arrow */}
                <svg
                    className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
            </button>

            {/* Body */}
            <div
                className={`transition-all duration-300 ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
            >
                <div className="px-5 pb-4 text-[14px] text-gray-600">
                    <p>Options will show here...</p>
                    <p className="mt-2 text-[13px] text-gray-500">
                        Click again to collapse.
                    </p>
                </div>
            </div>
        </div>
    );
}

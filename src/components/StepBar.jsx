import React from "react";

export default function StepBar({ currentStep = 1 }) {
    const steps = [
        { id: 1, label: "Design your ring" },
        { id: 2, label: "Choose your jeweler" },
        { id: 3, label: "Connect & Buy" },
    ];

    return (
        <div className="w-full max-w-[700px] bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-gray-100 py-3 px-6">
            <div className="flex items-center justify-between relative">
                {/* Connecting Lines Layer */}
                <div className="absolute top-4 left-[10%] right-[10%] h-[1px] bg-gray-200 -z-0" />

                {steps.map((s) => (
                    <div key={s.id} className="flex flex-col items-center relative z-10 bg-white px-2">
                        {/* Circle */}
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-300 mb-1
                                ${s.id === currentStep
                                    ? "bg-[#2c335e] text-white"
                                    : s.id < currentStep
                                        ? "bg-[#2c335e] text-white"
                                        : "bg-white text-gray-400 border border-gray-200 shadow-sm"}
                            `}
                        >
                            {s.id}
                        </div>

                        {/* Label */}
                        <span
                            className={`text-[11px] font-bold tracking-tight whitespace-nowrap
                                ${s.id === currentStep ? "text-[#3b426a]" : "text-gray-400"}
                            `}
                        >
                            {s.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

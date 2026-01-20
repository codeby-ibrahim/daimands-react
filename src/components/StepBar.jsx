import React from "react";

const steps = [
    { id: 1, label: "Design your ring", active: true },
    { id: 2, label: "Choose your jeweler", active: false },
    { id: 3, label: "Connect & Buy", active: false },
];

export default function StepBar() {
    return (
        <div className="w-full rounded-xl border border-[#cdd8ff] bg-[#f8fbff] p-3">
            <div className="grid grid-cols-3 items-center">
                {steps.map((s, idx) => (
                    <div key={s.id} className="flex items-center justify-center gap-3">
                        <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold
                ${s.active ? "bg-[#1d4ed8] text-white" : "bg-gray-200 text-gray-600"}
              `}
                        >
                            {s.id}
                        </div>

                        <span
                            className={`text-[14px] font-semibold ${s.active ? "text-[#1d4ed8]" : "text-gray-500"
                                }`}
                        >
                            {s.label}
                        </span>

                        {/* divider */}
                        {idx !== steps.length - 1 && (
                            <div className="hidden lg:block w-[140px] h-[2px] bg-[#dbe4ff] ml-6" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

import React from "react";

export default function BottomBar({ onSave, onNext, currentStep = 1 }) {
    const nextLabels = {
        1: "Next: Choose Jeweler",
        2: "Next: Connect & Buy",
        3: "Finish"
    };

    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#2c335e] text-white z-[100] h-[70px]">
            <div className="h-full mx-auto px-6 flex items-center justify-end gap-6">
                {/* Price Info */}
                <div className="text-right flex flex-col justify-center">
                    <div className="text-[15px] font-extrabold leading-tight">MSRP $2,730</div>
                    <div className="text-[11px] opacity-70 font-medium">(Setting only)</div>
                </div>

                {/* Vertical Divider */}
                <div className="h-10 w-[1px] bg-white/20" />

                {/* Save Link/Button */}
                <button
                    onClick={onSave}
                    className="text-[14px] font-bold hover:text-gray-300 transition-colors px-4"
                >
                    Save
                </button>

                {/* Next Button */}
                <button
                    onClick={onNext}
                    className="h-[46px] px-10 rounded-md bg-white text-[#2c335e] font-black text-[14px] hover:bg-gray-100 transition-all shadow-md active:scale-95"
                >
                    {nextLabels[currentStep] || "Next"}
                </button>
            </div>
        </div>
    );
}

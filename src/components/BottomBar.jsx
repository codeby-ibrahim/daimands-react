import React from "react";

export default function BottomBar() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#243b6b] text-white">
            <div className="mx-auto max-w-[1500px] px-6">
                <div className="h-[70px] flex items-center justify-end gap-4">
                    {/* MSRP */}
                    <div className="text-right mr-auto">
                        <div className="text-[16px] font-bold">MSRP $2,555</div>
                        <div className="text-[12px] opacity-80">(Setting only)</div>
                    </div>

                    {/* Save */}
                    <button className="h-[44px] px-10 rounded-md bg-[#2f4a86] hover:bg-[#34539a] font-semibold shadow">
                        Save
                    </button>

                    {/* Next */}
                    <button className="h-[44px] px-10 rounded-md bg-white text-[#1e3a8a] font-bold shadow">
                        Next: Choose Jeweler
                    </button>
                </div>
            </div>
        </div>
    );
}

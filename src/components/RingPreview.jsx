import React from "react";

export default function RingPreview() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#f2f4f8] via-[#efefef] to-[#f9f9fb] relative">
            {/* ring image fake */}
            <div className="w-[260px] h-[480px] bg-white/60 rounded-full blur-[0px] flex items-center justify-center">
                <div className="w-[170px] h-[420px] rounded-full border-[10px] border-[#cbd5e1] shadow-inner rotate-[10deg]" />
            </div>

            {/* floating button (left bottom) */}
            <button className="absolute left-6 bottom-6 w-12 h-12 rounded-full bg-white shadow-md border border-[#dbe4ff] flex items-center justify-center">
                ✨
            </button>
        </div>
    );
}

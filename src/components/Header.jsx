import React from "react";

export default function Header() {
    return (
        <header className="w-full bg-white border-b border-[#e6ecff]">
            <div className="mx-auto max-w-[1500px] px-6">
                <div className="h-[74px] flex items-center justify-between">
                    {/* LEFT LOGO */}
                    <div className="flex items-center gap-2">
                        <span className="text-[26px] font-medium text-gray-800">
                            StoneAlgo
                        </span>

                        <span className="text-[11px] font-semibold px-2 py-[2px] rounded-md bg-indigo-100 text-indigo-700">
                            PRO
                        </span>
                    </div>

                    {/* NAV */}
                    <nav className="hidden md:flex items-center gap-10 text-[14px] font-semibold text-[#1e3a8a]">
                        <a className="relative hover:text-[#0f172a]" href="#">
                            3D Ring Builder
                            <span className="absolute -top-4 -right-7 text-[10px] font-semibold px-2 py-[1px] rounded-full bg-green-100 text-green-700">
                                New
                            </span>
                        </a>

                        <a className="hover:text-[#0f172a]" href="#">
                            Shop Diamonds
                        </a>

                        <a className="hover:text-[#0f172a]" href="#">
                            Diamond Check Tool
                        </a>

                        <button className="flex items-center gap-1 hover:text-[#0f172a]">
                            More
                            <svg
                                className="w-4 h-4 mt-[2px]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                    </nav>

                    {/* RIGHT */}
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-[14px] font-semibold text-[#1e3a8a]">
                            Vault
                        </a>

                        <div className="w-9 h-9 rounded-full bg-[#334155] text-white flex items-center justify-center text-[13px] font-semibold">
                            M
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

import React from "react";

export default function RingBuilder() {
    return (
        <div>
            <header className="max-h-screen main-header sticky shadow sm:shadow-none py-3 top-0 left-0 z-60 w-full bg-white transition-all lg:overflow-visible lg:py-6">
                <div className="relative bg-white">
                    <div className="mx-auto px-4 md:px-8 lg-med:px-12 max-w-[2024px]">
                        <div className="relative flex-1 flex items-center justify-start">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <a href="/" data-link_name="home page" className="sa-nav_link relative">
                                    <span className="sr-only">StoneAlgo</span>
                                    <img className="block lg:hidden h-7 w-auto rounded sm:h-10" width="104" height="24"
                                        src="https://stonealgo-3.b-cdn.net/static/dist/next/images/StoneAlgo%20Logo.svg?width=104&height=24"
                                        alt="StoneAlgo Logo" />
                                    <span className="absolute -bottom-[7px] -right-[40px] inline-flex lg:hidden items-center rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
                                        PRO
                                    </span>
                                </a>
                                <a href="/" data-link_name="home page" className="sa-nav_link relative">
                                    <span className="sr-only">StoneAlgo</span>
                                </a>
                            </div>
                            <nav className="relative">
                                <ul className="nav-list hidden lg:flex space-x-6 xl:space-x-6 m-0 lg:text-base font-medium">
                                    <li className="relative">
                                        <a className="sa-nav_link" data-link_name="design" href="/custom/engagement-rings/">
                                            3D Ring Builder
                                            <span className="absolute top-0 -right-[38px] inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                                                New
                                            </span>
                                        </a>
                                    </li>
                                    <li><a className="sa-nav_link" data-link_name="search" href="/diamond-search/">Shop Diamonds</a></li>
                                    <li><a className="sa-nav_link" data-link_name="free check" href="/diamond-details/">Diamond Check Tool</a></li>
                                    <li>
                                        <div className="relative py-3 nav-menu" id="flyout-menu">
                                            <button className="inline-flex items-center gap-x-1 text-base font-medium" id="flyout-button">
                                                <span>More</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                                                </svg>
                                            </button>
                                            <div className="absolute hidden left-1/2 z-10 mt-5 w-screen max-w-max -translate-x-1/2 px-4" id="flyout-panel">
                                                <div className="w-screen max-w-md overflow-hidden rounded-3xl bg-white text-sm shadow-lg ring-1 ring-gray-900/5">
                                                    <div className="p-4">
                                                        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                                <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <a href="/diamond-comparison/" className="font-semibold">
                                                                    Diamond Comparison Tool
                                                                    <span className="absolute inset-0"></span>
                                                                </a>
                                                                <p className="mt-1 text-gray-600 font-normal">Side by side expert analysis of up to 4 diamonds</p>
                                                            </div>
                                                        </div>
                                                        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <a data-link_name="prices" href="/diamond-prices/" className="sa-nav_link font-semibold">
                                                                    Diamond Price Indexes
                                                                    <span className="absolute inset-0"></span>
                                                                </a>
                                                                <p className="mt-1 text-gray-600 font-normal">Track diamond prices for any category</p>
                                                            </div>
                                                        </div>
                                                        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                                <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <a href="/diamond-price-calculator/" className="font-semibold">
                                                                    Diamond Price Calculator
                                                                    <span className="absolute inset-0"></span>
                                                                </a>
                                                                <p className="mt-1 text-gray-600 font-normal">Calculate a price estimate for natural or lab grown diamonds</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <div className="absolute lg:static inset-y-0 right-0 lg:flex-1 xl:w-0 top-[-5px] sm:top-0">
                                <ul className="nav-list-right flex items-center justify-end m-0 lg:text-base font-medium" id="sa-nav">
                                    <li>
                                        <a id="sa-nav_vault" href="/vault/" data-link_name="vault" className="sa-nav_inactive sa-nav_link" aria-label="Vault">
                                            <span className="hidden lg-med:inline-flex">Vault</span>
                                        </a>
                                    </li>
                                    <li style={{ paddingLeft: "0 !important" }}>
                                        <div className="relative">
                                            <div className="dropdown-wrap relative">
                                                <button aria-label="My Account" className="nav-dropdown-btn hidden lg:flex items-center py-1 border-b-2 border-transparent focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out" aria-expanded="false">
                                                    <span className="sa-nav_inactive font-semibold uppercase">
                                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-500">
                                                            <span className="text-sm font-medium text-white">M</span>
                                                        </span>
                                                    </span>
                                                </button>
                                                <div className="nav-dropdown-content origin-top-right absolute right-0 mt-2 z-1001 w-60 rounded-md shadow-lg hidden" id="sa-nav_dropdown">
                                                    <div className="py-1 rounded-md bg-white shadow-xs">
                                                        <div className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out font-semibold truncate">
                                                            muhammadibrahimkhan5557@gmail.com
                                                        </div>
                                                        <a href="/vault/" data-link_name="vault" className="sa-nav_link block md:hidden px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Vault</a>
                                                        <a href="/u/dashboard/subscription-management/" data-link_name="manage sub" className="sa-nav_link flex space-x-1 px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                                            <span>StoneAlgo Pro</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-indigo-600">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                                            </svg>
                                                        </a>
                                                        <a href="/u/dashboard/settings/" data-link_name="user settings" className="sa-nav_link block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Settings</a>
                                                        <a href="/accounts/logout/" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Sign out</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => { }} aria-label="Navigation menu" type="button" className="bg-white cursor-pointer rounded-md p-2 inline-flex lg:hidden items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <svg id="sa-btn_open" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="sa-mobile_menu_holder" className="fixed inset-0 transition transform origin-top-right hidden lg-med:hidden">
                        <div className="w-full h-full bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img className="h-8 w-auto rounded-md" src="https://stonealgo-3.b-cdn.net/static/dist/img/marketing_logo-small.jpg" alt="StoneAlgo Logo" />
                                    </div>
                                    <div className="-mr-2">
                                        <button aria-label="Close Menu" onClick={() => { }} type="button" className="bg-white rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <svg id="sa-btn_close" className="h-6 w-6 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        <a href="/vault/" data-link_name="vault" className="sa-nav_link -m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-indigo-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900"> My Vault </span>
                                        </a>
                                        <a href="/custom/engagement-rings/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-indigo-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900 relative">
                                                3D Ring Builder
                                                <span className="absolute -top-[6px] -right-[41px] inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                                                    New
                                                </span>
                                            </span>
                                        </a>
                                        <a href="/diamond-search/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900"> Shop Diamonds (2M+)</span>
                                        </a>
                                        <a href="/diamond-details/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900"> Diamond Check Tool</span>
                                        </a>
                                        <a href="/diamond-prices/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900"> Diamond Price Indexes</span>
                                        </a>
                                        <a href="/diamond-comparison/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900"> Diamond Comparison Tool</span>
                                        </a>
                                        <a href="/diamond-price-calculator/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900"> Diamond Price Calculator</span>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 space-y-6 divide-y-2 divide-gray-50">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8 px-5">
                                    <a href="/local-jewelers/" className="text-base font-medium text-gray-900 hover:text-gray-700"> Local Jewelers </a>
                                    <a href="/diamond-questionnaire/" className="text-base font-medium text-gray-900 hover:text-gray-700"> Search Assistant</a>
                                    <a href="/frequently-asked-questions/" className="text-base font-medium text-gray-900 hover:text-gray-700"> FAQ </a>
                                    <a href="/blog/section/diamond-ring-guides" className="text-base font-medium text-gray-900 hover:text-gray-700"> Guides </a>
                                    <a href="/blog/" className="text-base font-medium text-gray-900 hover:text-gray-700"> Learning Center </a>
                                    <a href="/about/" className="text-base font-medium text-gray-900 hover:text-gray-700"> About</a>
                                    <a href="/lab-grown-diamonds/" className="text-base font-medium text-gray-900 hover:text-gray-700"> Lab Grown </a>
                                    <a href="/privacy-policy/" className="text-base font-medium text-gray-900 hover:text-gray-700"> Privacy </a>
                                </div>
                                <div id="sa-nav_mobile" className="grid grid-cols-1 gap-y-4 gap-x-8 px-5">
                                    <div className="mt-3">
                                        <div className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                            muhammadibrahimkhan5557@gmail.com
                                        </div>
                                        <a href="/u/dashboard/subscription-management/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                            <span>StoneAlgo Pro</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-indigo-600 ml-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                            </svg>
                                        </a>
                                        <a href="/u/dashboard/settings/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:text-gray-700">Settings</a>
                                        <a href="/accounts/logout/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:text-gray-700">Sign out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sa-progress" className="linear-progress-material small w-full lg:w-1/2 absolute bottom-[-1px] lg:bottom-[10px] mx-auto text-center left-0 right-0 hidden">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                </div>
            </header>

            <div className="customizer-container" id="builder-container" style={{ background: '#d3d3d3' }}>
                <div data-builder-overlay="true" id="steps-0" className="absolute px-2 sm:px-0 top-2 z-10 builder-steps">
                </div>
                <div className="overlay-wrapper">
                    <iframe id="ring-builder" className="customizer-overlay" src="https://stonealgo-custom.netlify.app/?ring=avLA8vOXfE4625quvgWtFA"></iframe>
                </div>
            </div>
        </div>
    );
}

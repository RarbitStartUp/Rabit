export default function Vote() {
    return (
        <>
            <div className="h-screen bg-slate-100">
                <div class="flex flex-col h-screen md:px-0 px-9 sm:px-9 md:px-4 max-w-7xl mx-auto">

                    <div class="flex justify-between items-center pt-10 pb-7">
                        <div class="flex justify-start flex-auto lg:w-0 lg:flex-1">
                            <span class="font-bold text-2xl">Rarbit</span>
                        </div>

                        <div class="-mr-2 -my-2">
                            <button type="button" class="p-2 inline-flex items-center justify-center text-slate-400" aria-expanded="false">
                                <span class="sr-only">Open menu</span>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex-grow flex-col gap-y-10">
                        <div class="box sm:flex">
                            <div class="p-8 flex flex-col justify-center flex-1 bg-white">
                                <div style={{ height: 2.7 + 'rem', width: 2.7 + 'rem' }} class="text-primary bg-primary bg-opacity-20 border flex items-center justify-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide">
                                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                        <path d="M16 10a4 4 0 01-8 0"></path>
                                    </svg>
                                </div>
                                <div class="flex items-center mt-[25px]">
                                    <div class="relative text-2xl font-medium">$400.00</div>
                                    <div class="flex text-green-500 cursor-pointer px-2"> +4.1%
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-4 h-4 ml-0.5">
                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                            <polyline points="5 12 12 5 19 12"></polyline>
                                        </svg>
                                    </div>
                                </div>

                                <div class="leading-relaxed mt-2 text-slate-500 dark:text-slate-500"> Total value of 100 reward points</div>
                            </div>
                        </div>
                        <div class="box sm:flex">
                            <div class="p-8 mt-4 flex flex-col justify-center flex-1 bg-white">

                                <div class="flex items-center">
                                    <div class="text-1xl md:text-2xl font-medium truncate">Total allocation</div>
                                    <div class="flex items-center ml-auto">
                                        <button class="bg-red-500 font-medium text-sm py-2 px-4 rounded text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-gray-700"> Add shop</button>
                                    </div>
                                </div>

                                <div class="w-100 overflow-x-auto overflow-y-hidden mt-7">
                                    <table class="table table-striped -mb-1">
                                        <thead>
                                            <tr>
                                                <th class="font-medium text-slate-500 text-left px-4 py-2 border-b-2 border-slate-100 bg-slate-200">Name</th>
                                                <th class="font-medium text-slate-500 text-right px-4 py-2 border-b-2 border-slate-100 bg-slate-200">Allocation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-slate-500 whitespace-nowrap px-4 py-2">some cafe</td>
                                                <td class="text-slate-500 whitespace-nowrap text-right px-4 py-2">10%</td>
                                            </tr>
                                            <tr>
                                                <td class="text-slate-500 whitespace-nowrap px-4 py-2 bg-slate-100">some other cafe</td>
                                                <td class="text-slate-500 whitespace-nowrap text-right px-4 py-2 bg-slate-100">10%</td>
                                            </tr>
                                            <tr>
                                                <td class="text-slate-500 whitespace-nowrap px-4 py-2">no where</td>
                                                <td class="text-slate-500 whitespace-nowrap text-right px-4 py-2">10%</td>
                                            </tr>
                                            <tr>
                                                <td class="text-slate-500 whitespace-nowrap px-4 py-2 bg-slate-100">favorite cafe</td>
                                                <td class="text-slate-500 whitespace-nowrap text-right px-4 py-2 bg-slate-100">70%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="text-center py-5" >Tab bar goes here</div>
                </div>
            </div>
        </>
    )
}

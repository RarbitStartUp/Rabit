import BottomTabsReward from './BottomTabsReward'
import PopUpMenu from '../components/PopUpMenu'

export default function Reward() {
  return (
    <div>
      <div className="h-screen bg-slate-100">
        <div class="mx-auto flex h-screen max-w-7xl flex-col px-9 sm:px-9 md:px-4">
          <div class="flex items-center justify-between pt-10 pb-7">
            <div class="flex flex-auto justify-start lg:w-0 lg:flex-1">
              <span class="text-2xl font-bold">Rarbit</span>
            </div>

            <div class="-my-2 -mr-2">
              <PopUpMenu />
            </div>
          </div>
          <div class="flex-grow flex-col gap-y-10">
            <div class="box sm:flex">
              <div class="flex flex-1 flex-col justify-center bg-white p-8">
                <div
                  style={{ height: 2.7 + 'rem', width: 2.7 + 'rem' }}
                  class="flex items-center justify-center rounded-full border bg-primary bg-opacity-20 text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide"
                  >
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 01-8 0"></path>
                  </svg>
                </div>
                <div class="mt-[25px] flex items-center">
                  <div class="relative text-2xl font-medium">$400.00</div>
                  <div class="flex cursor-pointer px-2 text-green-500">
                    {' '}
                    +4.1%
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide ml-0.5 h-4 w-4"
                    >
                      <line x1="12" y1="19" x2="12" y2="5"></line>
                      <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                  </div>
                </div>

                <div class="mt-2 leading-relaxed text-slate-500 dark:text-slate-500">
                  {' '}
                  Total value of 100 reward points
                </div>
              </div>
            </div>
            <div class="box sm:flex">
              <div class="mt-4 flex flex-1 flex-col justify-center bg-white p-8">
                <div class="flex items-center">
                  <div class="text-1xl truncate font-medium md:text-2xl">
                    Total allocation
                  </div>
                  <div class="ml-auto flex items-center">
                    <button class="rounded bg-primary py-2 px-4 text-sm font-medium text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-gray-700">
                      {' '}
                      Add shop
                    </button>
                  </div>
                </div>

                <div class="w-100 mt-7 overflow-x-auto overflow-y-hidden">
                  <table class="table-striped -mb-1 table">
                    <thead>
                      <tr>
                        <th class="border-b-2 border-slate-100 bg-slate-200 px-4 py-2 text-left font-medium text-slate-500">
                          Name
                        </th>
                        <th class="border-b-2 border-slate-100 bg-slate-200 px-4 py-2 text-right font-medium text-slate-500">
                          Allocation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 text-slate-500">
                          some cafe
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-right text-slate-500">
                          10%
                        </td>
                      </tr>
                      <tr>
                        <td class="whitespace-nowrap bg-slate-100 px-4 py-2 text-slate-500">
                          some other cafe
                        </td>
                        <td class="whitespace-nowrap bg-slate-100 px-4 py-2 text-right text-slate-500">
                          10%
                        </td>
                      </tr>
                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 text-slate-500">
                          no where
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-right text-slate-500">
                          10%
                        </td>
                      </tr>
                      <tr>
                        <td class="whitespace-nowrap bg-slate-100 px-4 py-2 text-slate-500">
                          favorite cafe
                        </td>
                        <td class="whitespace-nowrap bg-slate-100 px-4 py-2 text-right text-slate-500">
                          70%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="py-5 text-center">Tab bar goes here</div> */}
        </div>
      </div>
      <BottomTabsReward />
    </div>
  )
}

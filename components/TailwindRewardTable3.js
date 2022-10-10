import React from 'react'

function RewardTable3() {
  return (
    <div>
      <div class="relative overflow-x-auto rounded-2xl shadow-md">
        <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-3 py-3 pl-5">
                Shop Name
              </th>

              <th scope="col" class="px-3 py-3">
                Token %
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="whitespace-pre-line px-3 py-4 pl-5 font-medium text-gray-900 dark:text-white"
              >
                Sora Ramen
              </th>
              <td class="px-3 py-4 pl-7">20</td>
            </tr>
            <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="whitespace-pre-line px-3 py-4 pl-5 font-medium text-gray-900 dark:text-white"
              >
                Rim Cafe
              </th>
              <td class="px-3 py-4 pl-7">15</td>
            </tr>
            <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="whitespace-pre-line px-3 py-4 pl-5 font-medium text-gray-900 dark:text-white"
              >
                Aqua Bar
              </th>
              <td class="px-3 py-4 pl-7">10</td>
            </tr>
            <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="whitespace-pre-line px-3 py-4 pl-5 font-medium text-gray-900 dark:text-white"
              >
                Past Cafe
              </th>
              <td class="px-3 py-4 pl-7">5</td>
            </tr>

            <tr class="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="whitespace-pre-line px-3 py-4 pl-5 font-medium text-gray-900 dark:text-white"
              >
                Syria Dessert
              </th>
              <td class="px-3 py-4 pl-7">1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="py-2" />
      {/* <div className="truncate pl-2 text-sm font-medium text-primary underline md:text-2xl">
        See More
      </div> */}
    </div>
  )
}

export default RewardTable3

// import { useRouter } from 'next/router'

//   const router = useRouter()
//   onClick={() => router.push('../Tabs')}

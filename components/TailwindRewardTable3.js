import React from 'react'
import HeaderTable from './HeaderTable'

function RewardTable2() {
  return (
    <div class="relative overflow-x-auto rounded-2xl shadow-md">
      <HeaderTable />
      <div className="mt-3"></div>
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th> */}
            <th scope="col" class=" px-3 py-3 pl-5">
              Shop Name
            </th>
            <th scope="col" class="px-3 py-3">
              Date
            </th>
            <th scope="col" class="px-3 py-3">
              Token %
            </th>
            <th scope="col" class="px-3 py-3">
              Lock up til
            </th>
            {/* <th scope="col" class="px-3 py-3">
              <span class="sr-only">Edit</span>
            </th> */}
          </tr>
        </thead>
        <tbody>
          <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
            {/* <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                /> 
                <label for="checkbox-table-search-1" class="sr-only">
                  checkbox
                </label>
              </div>
            </td> */}
            <th
              scope="row"
              class="whitespace-pre-line px-3 py-4 pl-5 font-medium text-gray-900 dark:text-white"
            >
              Sora Ramen
            </th>
            <td class="px-3 py-4">23/3/2021</td>
            <td class="px-3 py-4">10</td>
            <td class="px-3 py-4">23/4/2021</td>
            {/* <td class="px-3 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </td> */}
          </tr>
          <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
            {/* <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                /> 
                <label for="checkbox-table-search-2" class="sr-only">
                  checkbox
                </label>
              </div>
            </td> */}
            <th
              scope="row"
              class="whitespace-pre-line px-3 py-4 pl-5 font-medium text-gray-900 dark:text-white"
            >
              Rim Cafe
            </th>
            <td class="px-3 py-4">18/7/2021</td>
            <td class="px-3 py-4">15</td>
            <td class="px-3 py-4">18/8/2021</td>
            {/* <td class="px-3 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </td> */}
          </tr>
          <tr class="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
            {/* <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label for="checkbox-table-search-3" class="sr-only">
                  checkbox
                </label>
              </div>
            </td> */}
            <th
              scope="row"
              class="whitespace-pre-line px-3 py-4 pl-5 font-medium text-gray-900 dark:text-white"
            >
              Aqua Bar
            </th>
            <td class="px-3 py-4">10/2/2020</td>
            <td class="px-3 py-4">20</td>
            <td class="px-3 py-4">10/3/2021</td>
            {/* <td class="px-3 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </td> */}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RewardTable2

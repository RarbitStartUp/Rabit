import React from 'react'
import 'flowbite'

function RewardTable2() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-2xl">
      <div class="p-4">
        <label for="table-search" class="sr-only">
          Search
        </label>
        <div class="relative mt-1">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              class="h-5 w-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            class="block w-80 rounded-3xl border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search for Shops"
          />
        </div>
      </div>
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              {/* <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div> */}
            </th>
            <th scope="col" class="px-6 py-3">
              Shop Name
            </th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
            <th scope="col" class="px-6 py-3">
              Token %
            </th>
            <th scope="col" class="px-6 py-3">
              Lock up til
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                {/* <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                /> */}
                {/* <label for="checkbox-table-search-1" class="sr-only">
                  checkbox
                </label> */}
              </div>
            </td>
            <th
              scope="row"
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              Sora Ramen
            </th>
            <td class="px-6 py-4">26/3/2021</td>
            <td class="px-6 py-4">10</td>
            <td class="px-6 py-4">26/4/2021</td>
            <td class="px-6 py-4 text-right">
              {/* <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a> */}
            </td>
          </tr>
          <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
            <td class="w- p-4">
              <div class="flex items-center">
                {/* <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                /> */}
                {/* <label for="checkbox-table-search-2" class="sr-only">
                  checkbox
                </label> */}
              </div>
            </td>
            <th
              scope="row"
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              Rim Cafe
            </th>
            <td class="px-6 py-4">18/7/2021</td>
            <td class="px-6 py-4">15</td>
            <td class="px-6 py-4">18/8/2021</td>
            <td class="px-6 py-4 text-right">
              {/* <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a> */}
            </td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              {/* <div class="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label for="checkbox-table-search-3" class="sr-only">
                  checkbox
                </label>
              </div> */}
            </td>
            <th
              scope="row"
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              Aqua Bar
            </th>
            <td class="px-6 py-4">10/2/2020</td>
            <td class="px-6 py-4">20</td>
            <td class="px-6 py-4">10/3/2021</td>
            <td class="px-6 py-4 text-right">
              {/* <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RewardTable2

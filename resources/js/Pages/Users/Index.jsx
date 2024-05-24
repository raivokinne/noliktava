import { useState } from "react";
import Edit from "./Edit";
import Authenticated from "@/Layouts/AuthedLayout";

export default function Index({ users }) {

    const formatDate = (isoString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(isoString).toLocaleDateString(undefined, options);
    };

    return (
        <Authenticated>
            <div className="w-full p-8 bg-white rounded-md">
                <div className="flex items-center justify-between pb-6">
                    <div>
                        <h2 className="font-semibold text-gray-600">
                            Products Order
                        </h2>
                        <span className="text-xs">All products item</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center p-2 rounded-md bg-gray-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                className="block ml-1 outline-none bg-gray-50"
                                type="text"
                                placeholder="search..."
                            />
                        </div>
                        <div className="ml-10 space-x-8 lg:ml-40">
                            <button className="px-4 py-2 font-semibold tracking-wide text-white bg-indigo-600 rounded-md cursor-pointer">
                                New Report
                            </button>
                            <button className="px-4 py-2 font-semibold tracking-wide text-white bg-indigo-600 rounded-md cursor-pointer">
                                Create
                            </button>
                            <button className="px-4 py-2 font-semibold tracking-wide text-white bg-indigo-600 rounded-md cursor-pointer">
                                <a href="/logout">Logout</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Name
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Role
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Created at
                                    </th>
                                    {/* <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        QRT
                                    </th> */}
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Status
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Options
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img
                                                        className="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {user.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {user.role}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {formatDate(user.created_at)}
                                            </p>
                                        </td>
                                        {/* <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {user.qrt}
                                            </p>
                                        </td> */}
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <span
                                                className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                                                    user.status === "Active"
                                                        ? "text-green-900"
                                                        : user.status ===
                                                          "Suspended"
                                                        ? "text-orange-900"
                                                        : "text-red-900"
                                                }`}
                                            >
                                                <span
                                                    aria-hidden
                                                    className={`absolute inset-0 ${
                                                        user.status === "Active"
                                                            ? "bg-green-200"
                                                            : user.status ===
                                                              "Suspended"
                                                            ? "bg-orange-200"
                                                            : "bg-red-200"
                                                    } opacity-50 rounded-full`}
                                                ></span>
                                                <span className="relative">
                                                    {user.status}
                                                </span>
                                            </span>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <span>
                                                <button
                                                    className="px-4 py-2 font-semibold tracking-wide text-white bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-500"
                                                >
                                                    edit user
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between">
                            <span className="text-xs text-gray-900 xs:text-sm">
                                Showing 1 to 4 of 50 Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button className="px-4 py-2 text-sm font-semibold transition duration-150 bg-indigo-600 rounded-l text-indigo-50 hover:bg-indigo-500">
                                    Prev
                                </button>
                                &nbsp; &nbsp;
                                <button className="px-4 py-2 text-sm font-semibold transition duration-150 bg-indigo-600 rounded-r text-indigo-50 hover:bg-indigo-500">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Authenticated>
    );
}

import { useState } from "react";
import Edit from "./Profile/Show";
import Authenticated from "@/Layouts/AuthedLayout";

export default function Index({ users }) {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = (user) => {
        setSelectedUser(user);
        // <Link href={`/users/${user}`} />
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
    };

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
                            <input
                                className="w-[400px] border border-black rounded-full p-2 px-4 bg-gray-50"
                                type="text"
                                placeholder="search..."
                            />
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
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <a href={`/users/${user.id}`  }>
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        {user.image ? (
                                                            <img
                                                                className="w-10 h-10 rounded-full"
                                                                src={user.image}
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <img
                                                                className="w-10 h-10 rounded-full"
                                                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                                                alt=""
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {user.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
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

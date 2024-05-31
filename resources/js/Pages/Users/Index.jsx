import { useState } from "react";
import Authenticated from "@/Layouts/AuthedLayout";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/inertia-react";
import Pagination from "@/Components/Pagination";

export default function Index({ users }) {
    const { data, setData, delete: destroy, processing } = useForm({});
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

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

    const logout = (e) => {
        e.preventDefault();
        destroy(route("logout"));
    };

    return (
        <Authenticated>
            <div className="w-full p-8 mt-20 bg-white rounded-md">
                <div className="flex items-center justify-between pb-6">
                    <div>
                        <h2 className="font-semibold text-gray-600">Users</h2>
                        <span className="text-xs">{users.length} users</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center p-2 rounded-md">
                            <div className="flex items-center justify-center">
                                <div className="flex rounded-full border border-gray-300 w-full max-w-[600px]">
                                    <input
                                        type="text"
                                        className="w-[400px] p-2 px-4 border border-black rounded-full"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
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
                                {users.length > 0 ? (
                                    <>
                                        {users.map((user, index) => (
                                            <tr key={index}>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <a
                                                        href={`/users/${user.id}/show`}
                                                    >
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                {user.image ? (
                                                                    <img
                                                                        className="w-10 h-10 rounded-full"
                                                                        src={
                                                                            user.image
                                                                        }
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
                                                        {formatDate(
                                                            user.created_at
                                                        )}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <span
                                                        className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                                                            user.status ===
                                                            "active"
                                                                ? "text-green-900"
                                                                : user.status ===
                                                                  "inactive"
                                                                ? "text-orange-900"
                                                                : "text-red-900"
                                                        }`}
                                                    >
                                                        <span
                                                            aria-hidden
                                                            className={`absolute inset-0 ${
                                                                user.status ===
                                                                "active"
                                                                    ? "bg-green-200"
                                                                    : user.status ===
                                                                      "inactive"
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
                                    </>
                                ) : (
                                    <tr>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                No users found
                                            </p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between">
                            <span className="text-xs text-gray-900 xs:text-sm">
                                Showing {users.length} of {users.length} Entries
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

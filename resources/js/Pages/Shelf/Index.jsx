import { useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthedLayout";

export default function Index({ shelves }) {
    const { data, setData, delete: destroy, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        destroy(route("shelf.destroy", data.id));
    };
    return (
        <>
            <Authenticated>
                <div className="px-4 py-4 -mx-4 grid place-items-center overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block w-[1400px] overflow-hidden rounded-lg shadow">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Id
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Name
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {shelves.length > 0 ? (
                                    <>
                                        {shelves.map((shelf, index) => (
                                            <tr key={index}>
                                                <a
                                                    href={`/shelves/${shelf.id}/show`}
                                                >
                                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                        <div className="flex items-center">
                                                            <div className="ml-3">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    {shelf.id}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {shelf.name}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                        <div>
                                                            <a
                                                                href={`/shelves/${shelf.id}/edit`}
                                                                className="p-2 px-4 text-white bg-blue-500 rounded-full"
                                                            >
                                                                Edit
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <form
                                                                onSubmit={
                                                                    submit
                                                                }
                                                            >
                                                                <button
                                                                    type="submit"
                                                                    className="p-2 px-4 ml-2 text-white bg-red-500 rounded-full"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </td>
                                                </a>
                                            </tr>
                                        ))}
                                    </>
                                ) : (
                                    <tr>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                No shelves found
                                                <a
                                                    href="/shelves/create"
                                                    className="text-xl px-3 p-1 ml-2 text-white bg-black rounded-full"
                                                >
                                                    +
                                                </a>
                                            </p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}

import { useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthedLayout";

export default function Index({ shelves, auth }) {
    const { data, setData, delete: destroy, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        destroy(route("shelf.destroy", data.id));
    };

    return (
        <>
            <Authenticated>
                <div className="absolute top-28 right-[45%]">
                    <h1 className="text-3xl font-bold">Shelves</h1>
                </div>

                {(auth.user.role === "admin" || auth.user.role === "worker") && (
                    <a
                        href="/shelves/create"
                        className="absolute p-2 px-4 text-2xl text-white bg-black rounded-full right-20 top-28"
                    >
                        +
                    </a>
                )}

                <div className="grid px-4 py-4 mt-40 overflow-x-auto place-items-center">
                    <div className="w-full overflow-hidden rounded-lg">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr className="bg-black">
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-white uppercase border-b-2 border-gray-200 w-[5%]">
                                        Id
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-white uppercase border-b-2 border-gray-200 w-[10%]">
                                        Name
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-white uppercase border-b-2 border-gray-200 w-[10%]">
                                        Product
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-white uppercase border-b-2 border-gray-200 w-[1%]">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {shelves.length > 0 ? (
                                    shelves.map((shelf, index) => (
                                        <tr key={index} className="bg-white">
                                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                                                <a
                                                    href={`/shelves/${shelf.id}/show`}
                                                >
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {shelf.id}
                                                    </p>
                                                </a>
                                            </td>
                                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {shelf.name}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    <a href={`/products/${shelf.product.id}/show`}>
                                                        {shelf.product.name}
                                                    </a>
                                                </p>
                                            </td>
                                            <td className="flex items-center gap-4 px-5 py-5 text-sm border-b border-gray-200">
                                                <a
                                                    href={`/shelves/${shelf.id}/edit`}
                                                    className="p-2 px-4 text-white bg-gray-800 rounded-full"
                                                >
                                                    Edit
                                                </a>
                                                <form onSubmit={submit}>
                                                    <button
                                                        type="submit"
                                                        className="p-2 px-4 ml-2 text-white bg-gray-800 rounded-full"
                                                    >
                                                        Delete
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="4"
                                            className="px-5 py-5 text-sm text-center text-gray-900 border-b border-gray-200"
                                        >
                                            No shelves found
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

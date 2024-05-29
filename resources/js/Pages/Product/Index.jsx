import Authenticated from "@/Layouts/AuthedLayout";

export default function Index({ products }) {
    const submit = (e) => {
        e.preventDefault();
        // Your form submission logic here
    };

    return (
        <>
            <Authenticated>
                <div className="px-4 py-4 -mx-4 grid place-items-center overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block w-[1400px] overflow-hidden rounded-lg shadow">
                        <div className=" bg-gray-700 justify-center h-4 w-max" >

                        </div>
                        <table className="min-w-full mt-20 leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Id
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Name
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Price
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Date
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Condition
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Description
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Stock
                                    </th>
                                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                        Settings
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.length > 0 ? (
                                    products.map((product, index) => (
                                        <tr key={index}>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {product.id}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {product.name}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {product.price}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {product.date}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {product.condition}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {product.description}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {product.stock}
                                                </p>
                                            </td>
                                            <td className=" text-sm bg-white border-b border-gray-200">
                                                <div className="flex gap-2 items-center">
                                                       <div>
                                                        <a
                                                            href={`/products/${product.id}/edit`}
                                                            className="p-2 px-4 text-white bg-blue-500 rounded-full"
                                                        >
                                                            Edit
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <form
                                                            onSubmit={submit}
                                                        >
                                                            <button
                                                                type="submit"
                                                                className="p-2 px-4 text-white bg-red-500 rounded-full"
                                                            >
                                                                Delete
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                                
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p>No products found</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <a
                        href="/products/create"
                        className="p-2 px-4 bg-black text-2xl text-white rounded-full mt-4"
                    >
                        +
                    </a>
                </div>
            </Authenticated>
        </>
    );
}

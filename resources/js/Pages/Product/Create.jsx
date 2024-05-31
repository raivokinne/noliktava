import { useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthedLayout";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
        date: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("product.store"));
    };
    return (
        <>
            <section className="flex items-center justify-center w-screen h-screen">
                <form
                    onSubmit={submit}
                    className="grid w-full p-8 bg-white rounded-md place-items-center"
                >
                    <fieldset
                        disabled={processing}
                        className="grid gap-4 w-[400px]"
                    >
                        <legend className="w-full text-2xl text-center">
                            Add Product
                        </legend>
                        <label htmlFor="name" className="flex flex-col">
                            <span className="font-bold">Name</span>
                            <input
                                className="placeholder-gray-500 rounded shadow "
                                type="text"
                                placeholder="name"
                                name="name"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            {errors.name && (
                                <p className="text-red-500">{errors.name}</p>
                            )}
                        </label>
                        <label htmlFor="description" className="flex flex-col">
                            <span className="font-bold">Description</span>
                            <textarea
                                className="placeholder-gray-500 rounded shadow resize-none"
                                name="description"
                                id="description"
                                cols="30"
                                rows="10"
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            ></textarea>
                            {errors.description && (
                                <p className="text-red-500">
                                    {errors.description}
                                </p>
                            )}
                        </label>
                        <label htmlFor="price" className="flex flex-col">
                            <span className="font-bold">Price</span>
                            <input
                                className="placeholder-gray-500 rounded shadow "
                                type="number"
                                placeholder="price"
                                name="price"
                                step="00.1"
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                            />
                            {errors.price && (
                                <p className="text-red-500">{errors.price}</p>
                            )}
                        </label>

                        <label htmlFor="image" className="flex flex-col">
                            <span className="font-bold">Image</span>
                            <input
                                className="placeholder-gray-500 rounded shadow "
                                type="file"
                                placeholder="image"
                                name="image"
                                onChange={(e) =>
                                    setData("image", e.target.value)
                                }
                            />
                            {errors.image && (
                                <p className="text-red-500">{errors.image}</p>
                            )}
                        </label>

                        <label htmlFor="stock" className="flex flex-col">
                            <span className="font-bold">Stock</span>
                            <input
                                className="placeholder-gray-500 rounded shadow "
                                type="number"
                                placeholder="stock"
                                name="stock"
                                onChange={(e) =>
                                    setData("stock", e.target.value)
                                }
                            />
                            {errors.stock && (
                                <p className="text-red-500">{errors.stock}</p>
                            )}
                        </label>

                        <label htmlFor="condition" className="flex flex-col">
                            <span className="font-bold">Condition</span>
                            <select name="condition" id="condition">
                                <option value="new">New</option>
                                <option value="barley used">Barley Used</option>
                                <option value="used">Used</option>
                            </select>
                            {errors.condition && (
                                <p className="text-red-500">
                                    {errors.condition}
                                </p>
                            )}
                        </label>
                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-black rounded"
                            onClick={submit}
                        >
                            Add
                        </button>
                    </fieldset>
                </form>
            </section>
        </>
    );
}
